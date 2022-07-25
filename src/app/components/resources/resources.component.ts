import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title= "Resources";
  subtitle = "undertittel";
  content = "../../assets/resources.png";


  boxContent = [this.title, this.subtitle, this.content];





}
