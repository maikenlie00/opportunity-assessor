import { Component, OnInit } from "@angular/core";
import { CdkDragDrop, transferArrayItem } from "@angular/cdk/drag-drop";
import { BlockLicensesComponent } from "../components/block-licenses/block-licenses.component";
import { ContributorsComponent } from "../components/contributors/contributors.component";
import { DescriptionComponent } from "../components/description/description.component";
import { PropertiesComponent } from "../components/properties/properties.component";
import { ResourcesComponent } from "../components/resources/resources.component";
import { RisksComponent } from "../components/risks/risks.component";
import { SlbNavigationFrameworkModule } from "@slb-dls/angular-material/navigation-framework";
import { SidebarComponent } from "../navandsidebar/sidebar/sidebar.component";
import { NavbarComponent } from "../navandsidebar/navbar/navbar.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  comp1 = new BlockLicensesComponent();
  comp2 = new ContributorsComponent();
  comp3 = new DescriptionComponent();
  comp4 = new PropertiesComponent();
  comp5 = new ResourcesComponent();
  comp6 = new RisksComponent();

  components = [
    {
      title: this.comp1.title,
      content: this.comp1.content,
      collapsed: false,
    },

    { title: this.comp2.title, content: this.comp2.content, collapsed: false },

    { title: this.comp3.title, content: this.comp3.content, collapsed: false },

    { title: this.comp4.title, content: this.comp4.content, collapsed: false },

    { title: this.comp5.title, content: this.comp5.content, collapsed: false },

    { title: this.comp6.title, content: this.comp6.content, collapsed: false },
  ];

  isCollapsed: boolean = true;
  doneList = []; // Hva gjør egentlig denne?, skjønner at den brukes

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  completed = [{ title: "", disabled: true }];

  firstLetter(variabel: string) {
    let firstletter = variabel.charAt(0);
    return firstletter;
  }

  title = "testProject";

  handleClose() {}

  /*   onDrop(event: CdkDragDrop<any[]>) {
    let index: any;
    index = this.todos[event.currentIndex];
    console.log(this.todos);

    let oldtarget = this.todos[event.previousIndex];
    this.todos[event.previousIndex] = this.todos[event.currentIndex];
    this.todos[event.currentIndex] = oldtarget;
  } */

  onDrop(event: CdkDragDrop<any[]>) {
    console.log("previosIndex = ", event.previousIndex);
    console.log("currentIndex = " + event.currentIndex);
    console.log(event.container.data);
    console.log(this.components.length);
    console.log(this.completed.length);
    if (
      event.previousContainer === event.container ||
      event.container == null
    ) {
      let oldtarget = this.components[event.previousIndex];
      this.components[event.previousIndex] =
        this.components[event.currentIndex];
      this.components[event.currentIndex] = oldtarget;
    } else if (this.components.length > 1 || this.completed.length == 5) {
      console.log("hei");
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    // Litt dårlig kode å ha en sånn betingelse, men ja vi kan se på en annen løsning.
  }
  /*   onNoClick(event: any) {
    /*let el = event.currentIndex;
    console.log(event.contianer.data);
    this.completed.push(event.container.data);
    delete this.components[el]; 
    viL AT NÅR MAN TRYKKER PÅ X så skal komponentet automatisk bli lagt til i "completed" listen og fjernet fra comonentlisten!
  } */
}
