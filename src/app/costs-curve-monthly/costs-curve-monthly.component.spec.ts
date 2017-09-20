import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostsCurveMonthlyComponent } from './costs-curve-monthly.component';

describe('CostsCurveMonthlyComponent', () => {
  let component: CostsCurveMonthlyComponent;
  let fixture: ComponentFixture<CostsCurveMonthlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostsCurveMonthlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostsCurveMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
