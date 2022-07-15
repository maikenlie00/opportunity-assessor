import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title= "Description Summary";
  subtitle = "undertittel";
  content = "innhold";


  boxContent = [this.title, this.subtitle, this.content];


}
