import { Component, OnInit, OnChanges, Input, SimpleChanges } from "@angular/core";
import { Chart, ChartObject, ChartOptions } from "highcharts";
import { GenericCurveComponent } from "../common/generic-curve-component";
import { LoanData } from "../model/loan-data";

@Component({
  selector: "app-costs-curve-cumulative",
  templateUrl: "../common/generic-curve.component.html",
  styleUrls: ["./costs-curve-cumulative.component.css"]
})
export class CostsCurveCumulativeComponent extends GenericCurveComponent implements OnInit {

  @Input() public initialCumulativeTotal: number[];
  @Input() public initialCumulativeInterest: number[];

  constructor() {
    super();
  }

  /**
   * Angular component init hook. Initializes graph with initial values.
   */
  public ngOnInit() {
    this.initGraphOptions(this.initialCumulativeTotal, this.initialCumulativeInterest);
  }

  /**
   * Initialize Highcarts chart options.
   * 
   * @param initialInterestRates 
   * @param loanAmount 
   * @param margin 
   */
  private initGraphOptions(cumulativeTotal: number[], cumulativeInterest: number[]) {
    this.options = this.generateGraphOptions("Cumulative costs over time", "Year", "Costs (€)", true);
    this.options["series"].push({
      name: "Cumulative interest (€)",
      data: cumulativeInterest,
    });
    this.options["series"].push({
      name: "Cumulative total cost (€)",
      data: cumulativeTotal,
    });
  }

  /**
   * Updates all chart data of this component
   */
  public updateCharts(data: LoanData) {
    this.updateChartData(0, data.getCumulativeInterest());
    this.updateChartData(1, data.getCumulativeTotal());
  }

}
