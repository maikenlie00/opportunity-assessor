import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockLicensesComponent } from './block-licenses.component';

describe('BlockLicensesComponent', () => {
  let component: BlockLicensesComponent;
  let fixture: ComponentFixture<BlockLicensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockLicensesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockLicensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
