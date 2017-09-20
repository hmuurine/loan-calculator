import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { LoanData, LoanFormDataInterface } from "./loan-data";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  private loanDataForm = new FormGroup({
    loanAmount : new FormControl(200000, [Validators.required, Validators.min(0)]),
    loanYears : new FormControl(15, [Validators.required, Validators.min(1)]),
    interestStart : new FormControl(1, [Validators.required, Validators.min(0)]),
    interestEnd : new FormControl(5, [Validators.required, Validators.min(0)]),
    margin : new FormControl(1, [Validators.required, Validators.min(0)]),
  });

  private model = new LoanData();

  private hasError(formControlName: string) {
    return !this.loanDataForm.get(formControlName).valid;
  }

  private initGraphs() {
    if (this.loanDataForm.valid) {
      this.model.setFormData(this.loanDataForm.value as LoanFormDataInterface);
    }
  }
}
