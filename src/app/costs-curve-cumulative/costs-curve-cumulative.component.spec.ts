import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostsCurveCumulativeComponent } from './costs-curve-cumulative.component';

describe('CostsCurveCumulativeComponent', () => {
  let component: CostsCurveCumulativeComponent;
  let fixture: ComponentFixture<CostsCurveCumulativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostsCurveCumulativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostsCurveCumulativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
