import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Subject } from "rxjs/Subject";
import { LoanType } from "../model/loan-type-enum";
import { LoanFormDataInterface } from "../model/loan-form-data-interface";
import "rxjs/add/operator/takeUntil";
import "rxjs/add/operator/debounceTime";

@Component({
  selector: "app-loan-data-form",
  templateUrl: "./loan-data-form.component.html",
  styleUrls: ["./loan-data-form.component.css"]
})
export class LoanDataFormComponent implements OnInit, OnDestroy {

  @Input() public initialValues: LoanFormDataInterface;
  @Output() public onSubmit = new EventEmitter<LoanFormDataInterface>();

  public loanDataForm = new FormGroup({
    loanAmount : new FormControl(200000, [Validators.required, Validators.min(0)]),
    loanYears : new FormControl(15, [Validators.required, Validators.min(1)]),
    loanType : new FormControl(LoanType.EqualAmortization, [Validators.required]),
    interestAdjustementPeriod : new FormControl(12, [Validators.required]),
    interestStart : new FormControl(1, [Validators.required, Validators.min(0)]),
    interestEnd : new FormControl(5, [Validators.required, Validators.min(0)]),
    margin : new FormControl(1, [Validators.required, Validators.min(0)]),
  });

  public loanTypes = [
    { type: LoanType.EqualAmortization, name: "Equal amortization" },
    { type: LoanType.Bullet, name: "Bullet" },
  ];
  public interestAdjustementPeriods = [1, 3, 6, 12];
  public showValidationError: boolean;
  private ngUnsubscribe: Subject<any> = new Subject();

  constructor() { }

  /**
   * Angular component init hook. Sets initial values, if given.
   */
  public ngOnInit() {
    if (this.initialValues) {
      this.loanDataForm.patchValue(this.initialValues);
    }

    // delay showing validation error message until user stops typing:
    this.loanDataForm.valueChanges.takeUntil(this.ngUnsubscribe).debounceTime(500).subscribe(
      () => this.showValidationError = !this.loanDataForm.valid
    );
  }

  /**
   * Angular component destroy hook. Terminates value changed listener Observables.
   */
  public ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  /**
   * When form is submitted, and it's valid emit event to parent component.
   */
  public onFormSubmit() {
    if (this.loanDataForm.valid) {
      this.onSubmit.emit(this.loanDataForm.value as LoanFormDataInterface);
    }
  }

  /**
   * Returns true if given form component has validation errors.
   *
   * @param formControlName
   */
  public hasError(formControlName: string) {
    return !this.loanDataForm.get(formControlName).valid;
  }

  /**
   * Returns true if the entire form is invalid
   */
  public hasErrors() {
    return !this.loanDataForm.valid;
  }

}
