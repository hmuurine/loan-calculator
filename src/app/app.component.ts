import { Component, ViewChild } from "@angular/core";
import { LoanData } from "./model/loan-data";
import { LoanFormDataInterface } from "./model/loan-form-data-interface";
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
  private initGraphs(loanDataForm: LoanFormDataInterface) {
    this.controller.setFormData(loanDataForm);
    this.updateCharts();
  }

  /**
   * Function that's called when modifying a single yearly interest.
   *
   * @param rate 
   */
  private updateInterestRate(rate: InterestValueInterface) {
    this.controller.setYearlyInterestRate(rate.idx, rate.value);
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
