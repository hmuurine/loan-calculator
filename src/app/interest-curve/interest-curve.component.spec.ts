import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { InterestCurveComponent } from "./interest-curve.component";

describe("InterestCurveComponent", () => {
  let component: InterestCurveComponent;
  let fixture: ComponentFixture<InterestCurveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestCurveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestCurveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
