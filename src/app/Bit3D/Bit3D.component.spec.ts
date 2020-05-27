import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bit3DComponent } from './Bit3D.component';

import * as THREE from "three";
import { OrbitControls } from "node_modules/three/examples/jsm/controls/OrbitControls";
import { OBJLoader2 } from "node_modules/three/examples/jsm/loaders/OBJLoader2";
import { MTLLoader } from "node_modules/three/examples/jsm/loaders/MTLLoader.js";
import { MtlObjBridge } from "node_modules/three/examples/jsm/loaders/obj2/bridge/MtlObjBridge.js";

describe('Bit3DComponent', () => {
  let component: Bit3DComponent;
  let fixture: ComponentFixture<Bit3DComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bit3DComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bit3DComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
