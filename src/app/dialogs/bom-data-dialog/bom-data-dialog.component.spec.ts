import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BomDataDialogComponent } from './bom-data-dialog.component';

describe('BomDataDialogComponent', () => {
  let component: BomDataDialogComponent;
  let fixture: ComponentFixture<BomDataDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BomDataDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BomDataDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
