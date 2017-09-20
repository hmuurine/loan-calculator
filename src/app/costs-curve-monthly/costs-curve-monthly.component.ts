import { Component, OnInit, OnChanges, Input, SimpleChanges } from "@angular/core";
import { Chart, ChartObject, ChartOptions } from "highcharts";
import { GenericCurveComponent } from "../common/generic-curve-component";
import { LoanData } from "../model/loan-data";

@Component({
  selector: "app-costs-curve-monthly",
  templateUrl: "../common/generic-curve.component.html",
  styleUrls: ["./costs-curve-monthly.component.css"]
})
export class CostsCurveMonthlyComponent extends GenericCurveComponent implements OnInit {

  @Input() public initialMonthlyPayment: number[];
  @Input() public initialMonthlyInterest: number[];

  constructor() {
    super();
  }

  /**
   * Angular component init hook. Initializes graph with initial values.
   */
  public ngOnInit() {
    this.initGraphOptions(this.initialMonthlyPayment, this.initialMonthlyInterest);
  }

  /**
   * Initialize Highcarts chart options.
   * 
   * @param initialInterestRates 
   * @param loanAmount 
   * @param margin 
   */
  private initGraphOptions(monthlyPayment: number[], monthlyInterest: number[]) {
    this.options = this.generateGraphOptions("Monthly costs", "Year", "Costs (€)", true);
    this.options["series"].push({
      name: "Interest (€)",
      data: monthlyInterest,
      type: "column"
    });
    this.options["series"].push({
      name: "Payment (€)",
      data: monthlyPayment,
      type: "column"
    });
    this.options["plotOptions"] = {
      column: {
        stacking: "normal"
      }
    };
  }

  /**
   * Updates all chart data of this component
   */
  public updateCharts(data: LoanData) {
    this.updateChartData(0, data.getMonthlyInterest());
    this.updateChartData(1, data.getMonthlyPayment());
  }

}
