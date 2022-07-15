import { Component, OnInit } from "@angular/core";
import { CdkDragDrop, transferArrayItem } from "@angular/cdk/drag-drop";
import { BlockLicensesComponent } from "../components/block-licenses/block-licenses.component";
import { ContributorsComponent } from "../components/contributors/contributors.component";
import { DescriptionComponent } from "../components/description/description.component";
import { PropertiesComponent } from "../components/properties/properties.component";
import { ResourcesComponent } from "../components/resources/resources.component";
import { RisksComponent } from "../components/risks/risks.component";

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

  todos = [
    { title: this.comp1.title, content: this.comp1.content, collapsed: false },

    { title: this.comp2.title, content: this.comp2.content, collapsed: false },

    { title: this.comp3.title, content: this.comp3.content, collapsed: false },

    { title: this.comp4.title, content: this.comp4.content, collapsed: false },

    { title: this.comp5.title, content: this.comp5.content, collapsed: false },

    { title: this.comp6.title, content: this.comp6.content, collapsed: false },
  ];

  isCollapsed: boolean = true;
  doneList = [];

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  /* contributors = [
    {title: this.comp2.title,
      content: this.comp2.content},
  ];

  description = [
    {title: this.comp3.title,
      content: this.comp3.content},
  ];

  properties = [
    {title: this.comp4.title,
      content: this.comp4.content},
  ];

  resources = [
    {title: this.comp5.title,
      content: this.comp5.content},
  ];

  risks = [
    {title: this.comp6.title,
      content: this.comp6.content},
  ];
 */

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
    if (
      event.previousContainer === event.container ||
      event.container == null
    ) {
      let oldtarget = this.todos[event.previousIndex];
      this.todos[event.previousIndex] = this.todos[event.currentIndex];
      this.todos[event.currentIndex] = oldtarget;
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
