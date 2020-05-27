import { Component, OnInit } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
// import { BomDataDialogComponent } from '../../../dialogs/bom-data-dialog/bom-data-dialog.component';
import { ReportDialogComponent } from '../dialogs/report-dialog/report-dialog.component';
import { Bit3DComponent, IThreeDConfig } from '../Bit3D/Bit3D.component';
import { BitdataService } from '../shared/bitdata.service';


@Component({
  selector: "app-preview",
  templateUrl: "./preview.component.html",
  styleUrls: ["./preview.component.scss"]
})
export class PreviewComponent implements OnInit {
  params: string[] = [
    "INSPECTION PROGRAM",
    "PART NUMBER",
    "PART TYPE",
    "BIT TYPE",
    "BIT DIAMETER (in.)",
    "CONNECTION SIZE",
    "NOZZLE SIZE",
    "NUMBER OF BLADES"
  ];

  configs: IThreeDConfig = {
    hasTexture: false,
    rotateX: -90,
    rotateY: 0,
    rotateZ: 0,
    zoom: 1,
    canvasID: 'preview'
  }
  constructor(public dialog: MatDialog, public bitDataService: BitdataService) {
    
  }

  ngOnInit() {}

//   openBom(): void {
//     const dialogRef = this.dialog.open(BomDataDialogComponent, {
//       width: '1200px',
//       height: '746px',
//       disableClose: true
//   });
// }

  openReport(): void {
    const dialogRef = this.dialog.open(ReportDialogComponent, {
      width: '460px',
      height: '563px',
      disableClose: true
  });
}

}
