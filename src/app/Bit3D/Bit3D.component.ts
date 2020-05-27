import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  AfterViewInit,
} from "@angular/core";
declare var $: any;
import * as THREE from "three";
import { OrbitControls } from "node_modules/three/examples/jsm/controls/OrbitControls";
import { OBJLoader2 } from "node_modules/three/examples/jsm/loaders/OBJLoader2";
import { MTLLoader } from "node_modules/three/examples/jsm/loaders/MTLLoader.js";
import { MtlObjBridge } from "node_modules/three/examples/jsm/loaders/obj2/bridge/MtlObjBridge.js";

@Component({
  selector: "app-Bit3D",
  templateUrl: "./Bit3D.component.html",
  styleUrls: ["./Bit3D.component.scss"],
})
export class Bit3DComponent implements OnDestroy, AfterViewInit {
  @Input() width: number;
  @Input() height: number;

  @Input() configs: IThreeDConfig;

  stop: boolean;
  animateId: number;
  p;
  src = "../assets/images/sample.jpg";
  scene;
  renderer;
  camera;
  controls;

  root: any;
  vectorX = new THREE.Vector3(1, 0, 0);

  vectorZ = new THREE.Vector3(0, 0, 1);

  constructor() {}

  ngAfterViewInit(): void {
    const canvas: any = document.getElementById(this.configs.canvasID);

    this.renderer = new THREE.WebGLRenderer({ canvas });

    const fov = 75;
    const aspect = canvas.clientWidth / canvas.clientHeight; // the canvas default
    const near = 0.1;
    const far = 1000;
    this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    this.camera.position.set(0, 0, 0);

    this.camera.zoom = this.configs.zoom;
    this.camera.updateProjectionMatrix();

    this.controls = new OrbitControls(this.camera, canvas);
    this.controls.target.set(0, 0, 0);
    this.controls.update();

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color("#f0f0f0");

    {
      const skyColor = 0xffffff;
      const intensity = 0.6;
      const light = new THREE.HemisphereLight(skyColor, 0x404040, intensity);
      this.scene.add(light);
    }

    {
      // light
      var light = new THREE.AmbientLight(0xffffff, 0.8); // soft white light
      this.scene.add(light);
    }

    const mtlLoader = new MTLLoader();
    let mtlName = "";

    if (this.configs.hasTexture)
      mtlName = "../../../assets/test_1mm_w_color.mtl";

    mtlLoader.load(mtlName, (mtlParseResult) => {
      const objLoader = new OBJLoader2();
      const materials = MtlObjBridge.addMaterialsFromMtlLoader(mtlParseResult);
      objLoader.addMaterials(materials, true);
      objLoader.load("../../../assets/test_1mm_w_color.obj", (root) => {
        root.rotation.x = (this.configs.rotateX * Math.PI) / 180;
        root.rotation.y = (this.configs.rotateY * Math.PI) / 180;
        root.rotation.z = (this.configs.rotateZ * Math.PI) / 180;

        this.scene.add(root);
        // compute the box that contains all the stuff
        // from root and below
        const box = new THREE.Box3().setFromObject(root);

        const boxSize = box.getSize(new THREE.Vector3()).length();
        const boxCenter = box.getCenter(new THREE.Vector3());

        // set the camera to frame the box
        this.frameArea(boxSize * 1.2, boxSize, boxCenter, this.camera);
        this.root = root;

        // update the Trackball controls to handle the new size
        this.controls.maxDistance = boxSize * 10;
        this.controls.target.copy(boxCenter);
        this.controls.saveState();
        this.controls.update();
      });
      requestAnimationFrame(this.render.bind(this));
    });
  }

  resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  render() {
    if (this.resizeRendererToDisplaySize(this.renderer)) {
      const canvas = this.renderer.domElement;
      this.camera.aspect = canvas.clientWidth / canvas.clientHeight;
      this.camera.updateProjectionMatrix();
    }

    this.renderer.render(this.scene, this.camera);
    this.animateId = requestAnimationFrame(this.render.bind(this));
  }

  frameArea(sizeToFitOnScreen, boxSize, boxCenter, camera) {
    const halfSizeToFitOnScreen = sizeToFitOnScreen * 0.5;
    const halfFovY = THREE.MathUtils.degToRad(camera.fov * 0.5);
    const distance = halfSizeToFitOnScreen / Math.tan(halfFovY);
    // compute a unit vector that points in the direction the camera is now
    // in the xz plane from the center of the box
    const direction = new THREE.Vector3()
      .subVectors(camera.position, boxCenter)
      .multiply(new THREE.Vector3(1, 0, 1))
      .normalize();

    // move the camera to a position distance units way from the center
    // in whatever direction the camera was from the center already
    camera.position.copy(direction.multiplyScalar(distance).add(boxCenter));

    // pick some near and far values for the frustum that
    // will contain the box.
    camera.near = boxSize / 100;
    camera.far = boxSize * 100;
    camera.rotation.z = 500;

    camera.updateProjectionMatrix();

    // point the camera to look at the center of the box
    camera.lookAt(boxCenter.x, boxCenter.y, boxCenter.z);
  }

  destory() {
    window.cancelAnimationFrame(this.animateId);
    this.scene = null;
    this.renderer = null;
  }

  reset() {
    this.controls.reset();
  }

  ngOnDestroy(): void {
    this.destory();
  }
}

export interface IThreeDConfig {
  hasTexture: boolean;
  rotateX: number;
  rotateY: number;
  rotateZ: number;
  zoom: number;
  canvasID: string;
}
