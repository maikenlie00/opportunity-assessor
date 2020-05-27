import { Component, OnInit } from '@angular/core';
import { BitdataService } from "../shared/bitdata.service";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
  serialNumber: string;

  constructor(
    public bitService: BitdataService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}
  ngOnInit() {}

  onSubmitScanForm(scanForm: NgForm): void {
    this.bitService.serialID = this.serialNumber;
    this.router.navigate(["preview"], { relativeTo: this.route });
  }

  onClearScanForm(scanForm: NgForm): void {
    scanForm.reset();
  }
}