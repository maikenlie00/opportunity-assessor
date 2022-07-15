import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-block-licenses',
  templateUrl: './block-licenses.component.html',
  styleUrls: ['./block-licenses.component.scss']
})
export class BlockLicensesComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  title = 'Block and Licence';
  subtitle = 'ID West Aru II';
  content = 'innhold';

  boxContent = [this.title, this.subtitle, this.content];
}
