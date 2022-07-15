import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.scss']
})
export class ContributorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title= "Contributors";
  subtitle = "Created by";
  content = "innhold";


  boxContent = [this.title, this.subtitle, this.content];

}
