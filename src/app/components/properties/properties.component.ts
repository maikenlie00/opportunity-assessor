import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title= "Properties";
  subtitle = "Geologist";
  content = "../../assets/properties.png";


  boxContent = [this.title, this.subtitle, this.content];



}
