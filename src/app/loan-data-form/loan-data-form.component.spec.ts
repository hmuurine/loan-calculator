import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDataFormComponent } from './loan-data-form.component';

describe('LoanDataFormComponent', () => {
  let component: LoanDataFormComponent;
  let fixture: ComponentFixture<LoanDataFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanDataFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
