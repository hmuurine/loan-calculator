import { Component, ViewChild } from "@angular/core";
import { LoanData } from "./model/loan-data";
import { LoanFormDataInterface } from "./common/loan-form-data-interface";
import { InterestValueInterface } from "./common/interest-value-interface";
import { InterestCurveComponent } from "./interest-curve/interest-curve.component";
import { CostsCurveMonthlyComponent } from "./costs-curve-monthly/costs-curve-monthly.component";
import { CostsCurveCumulativeComponent } from "./costs-curve-cumulative/costs-curve-cumulative.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  private model = new LoanData();

  @ViewChild(InterestCurveComponent) private interestCurve: InterestCurveComponent;
  @ViewChild(CostsCurveMonthlyComponent) private costsCurveMonthly: CostsCurveMonthlyComponent;
  @ViewChild(CostsCurveCumulativeComponent) private costsCurveCumulative: CostsCurveCumulativeComponent;

  /**
   * Initializes graphs after initial data submit.
   * 
   * @param loanDataForm 
   */
  private initGraphs(loanDataForm: LoanFormDataInterface) {
    this.model.setFormData(loanDataForm);
    this.updateCharts();
  }

  /**
   * Function that's called when modifying a single yearly interest.
   *
   * @param rate 
   */
  private updateInterestRate(rate: InterestValueInterface) {
    this.model.setYearlyInterestRate(rate.idx, rate.value);
    this.updateCharts();
  }

  /**
   * Update data for all the charts.
   */
  private updateCharts() {
    for (let chart of [this.interestCurve, this.costsCurveMonthly, this.costsCurveCumulative]) {
      if (chart) {
        chart.updateCharts(this.model);
      }
    }
  }

  /**
   * Total cumulative costs at the end of loan period
   */
  private getTotalCosts() {
    let cumulArray = this.model.getCumulativeTotal();
    return cumulArray && cumulArray.length > 0 ? Math.round(cumulArray[cumulArray.length - 1]) : "";
  }

  /**
   * Total cumulative interest at the end of loan period
   */
  private getTotalInterest() {
    let cumulArray = this.model.getCumulativeInterest();
    return cumulArray && cumulArray.length > 0 ? Math.round(cumulArray[cumulArray.length - 1]) : "";
  }

}
