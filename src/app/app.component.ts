import { Component, ViewChild } from "@angular/core";
import { LoanData } from "./model/loan-data";
import { LoanFormDataInterface } from "./model/loan-form-data-interface";
import { LoanInterestDataInterface } from "./model/loan-interest-data-interface";
import { InterestValueInterface } from "./model/interest-value-interface";
import { LoanCalculatorController } from "./calculator/loan-calculator-controller";
import { InterestCurveComponent } from "./interest-curve/interest-curve.component";
import { CostsCurveYearlyComponent } from "./costs-curve-yearly/costs-curve-yearly.component";
import { CostsCurveCumulativeComponent } from "./costs-curve-cumulative/costs-curve-cumulative.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  private controller = new LoanCalculatorController();

  @ViewChild(InterestCurveComponent) private interestCurve: InterestCurveComponent;
  @ViewChild(CostsCurveYearlyComponent) private costsCurveYearly: CostsCurveYearlyComponent;
  @ViewChild(CostsCurveCumulativeComponent) private costsCurveCumulative: CostsCurveCumulativeComponent;

  /**
   * Initializes graphs after initial data submit.
   * 
   * @param loanDataForm 
   */
  public setLoanData(loanDataForm: LoanFormDataInterface) {
    this.controller.setFormData(loanDataForm);
    this.updateCharts();
  }

  /**
   * Function that's called when modifying a single yearly interest.
   *
   * @param rate 
   */
  public updateInterestRate(rate: InterestValueInterface) {
    this.controller.setYearlyInterestRate(rate.idx, rate.value);
    this.updateCharts();
  }

  /**
   * Reset interest rate curve.
   * 
   * @param rates 
   */
  public resetInterestRates(rates: LoanInterestDataInterface) {
    this.controller.resetInterestData(rates);
    this.updateCharts();
  }

  /**
   * Update data for all the charts.
   */
  private updateCharts() {
    for (let chart of [this.interestCurve, this.costsCurveYearly, this.costsCurveCumulative]) {
      if (chart) {
        chart.updateCharts(this.controller.getLoanData());
      }
    }
  }

}
