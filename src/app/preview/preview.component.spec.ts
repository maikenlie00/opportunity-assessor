import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PreviewComponent } from "./preview.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { BitdataService } from "src/app/shared/bitdata.service";

fdescribe("PreviewComponent", () => {
  let component: PreviewComponent;
  let fixture: ComponentFixture<PreviewComponent>;
  let mockDialog;

  beforeEach(async(() => {
    mockDialog = jasmine.createSpyObj("MatDialog", ["open"]);
    TestBed.configureTestingModule({
      declarations: [PreviewComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{ provide: MatDialog, useValue: mockDialog }, BitdataService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  // it("should open dialog", () => {
  //   component.openBom();

  //   expect(TestBed.get(MatDialog).open).toHaveBeenCalled();
  // });
});
