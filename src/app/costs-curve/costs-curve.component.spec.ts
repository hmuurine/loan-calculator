import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CostsCurveComponent } from "./costs-curve.component";

describe("CostsCurveComponent", () => {
  let component: CostsCurveComponent;
  let fixture: ComponentFixture<CostsCurveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostsCurveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostsCurveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
