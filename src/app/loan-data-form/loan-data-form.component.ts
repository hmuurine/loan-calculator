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
  @Output() public valueChanged = new EventEmitter<LoanFormDataInterface>();

  private loanDataForm = new FormGroup({
    loanAmount : new FormControl("", [Validators.required, Validators.min(0)]),
    loanYears : new FormControl("", [Validators.required, Validators.min(1)]),
    loanType : new FormControl("", [Validators.required]),
    interestAdjustementPeriod : new FormControl("", [Validators.required]),
    margin : new FormControl("", [Validators.required, Validators.min(0)]),
  });

  private loanTypes = [
    { type: LoanType.EqualAmortization, name: "Equal amortization" },
    { type: LoanType.Bullet, name: "Bullet" },
  ];
  private interestAdjustementPeriods = [1, 3, 6, 12];
  private showValidationError: boolean;
  private ngUnsubscribe: Subject<any> = new Subject();

  constructor() { }

  /**
   * Angular component init hook. Sets initial values, if given.
   */
  public ngOnInit() {
    // delay showing validation error message until user stops typing:. Automatically submit data on typing, if form is valid.
    this.loanDataForm.valueChanges.takeUntil(this.ngUnsubscribe).debounceTime(500).subscribe(
      () => {
        this.showValidationError = !this.loanDataForm.valid;
        this.emitValuesIfValid();
      }
    );

    if (this.initialValues) {
      this.loanDataForm.setValue(this.initialValues);
    }

  }

  /**
   * Angular component destroy hook. Terminates value changed listener Observables.
   */
  public ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  /**
   * Emit event to parent component, if form is valid.
   */
  private emitValuesIfValid() {
    if (this.loanDataForm.valid) {
      this.valueChanged.emit(this.loanDataForm.value as LoanFormDataInterface);
    }
  }

  /**
   * Returns true if given form component has validation errors.
   *
   * @param formControlName
   */
  private hasError(formControlName: string) {
    return !this.loanDataForm.get(formControlName).valid;
  }

  /**
   * Returns true if the entire form is invalid
   */
  private hasErrors() {
    return !this.loanDataForm.valid;
  }

}
