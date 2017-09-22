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

  @Input() public initialYearlyPrincipal: number[];
  @Input() public initialYearlyInterest: number[];

  constructor() {
    super();
  }

  /**
   * Angular component init hook. Initializes graph with initial values.
   */
  public ngOnInit() {
    this.initGraphOptions(this.initialYearlyPrincipal, this.initialYearlyInterest);
  }

  /**
   * Initialize Highcarts chart options.
   * 
   * @param yearlyPrincipal 
   * @param monthlyInterest 
   */
  private initGraphOptions(yearlyPrincipal: number[], yearlyInterest: number[]) {
    this.options = this.generateGraphOptions("Yearly costs", "Year", "Costs (€)", true);
    this.options["series"].push({
      name: "Interest (€)",
      data: yearlyInterest,
      type: "column"
    });
    this.options["series"].push({
      name: "Principal (€)",
      data: yearlyPrincipal,
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
    this.updateChartData(0, data.paymentData.yearlyPrincipal);
    this.updateChartData(1, data.paymentData.yearlyInterest);
  }

}
