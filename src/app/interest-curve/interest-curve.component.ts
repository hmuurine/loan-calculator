import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from "@angular/core";
import { Chart, ChartObject, ChartOptions } from "highcharts";
import { InterestValueInterface } from "../common/interest-value-interface";
import { GenericCurveComponent } from "../common/generic-curve-component";
import { LoanData } from "../model/loan-data";

@Component({
  selector: "app-interest-curve",
  templateUrl: "../common/generic-curve.component.html",
  styleUrls: ["./interest-curve.component.css"]
})
export class InterestCurveComponent extends GenericCurveComponent implements OnInit {
  @Input() public initialInterestRates: number[];
  @Output() public valueChanged = new EventEmitter<InterestValueInterface>();

  constructor() {
    super();
  }

  /**
   * Angular component init hook. Initializes graph with default values.
   */
  public ngOnInit() {
    this.initGraphOptions(this.initialInterestRates);
  }

  /**
   * Highcharts draggable points drop event calls this.
   *
   * @param idx 
   * @param value 
   */
  private changeInterestRate(idx: number, value: number) {
    this.valueChanged.emit({idx: idx, value: value});
  }

  /**
   * Initialize Highcarts chart options.
   *
   * @param initialInterestRates 
   */
  private initGraphOptions(initialInterestRates: number[]) {
    this.options = this.generateGraphOptions("Yearly interest rate<br>(drag & drop to fine-tune)", "Year", "Interest rate (%)", false);
    this.options["series"].push({
      name: "Interest rate (%)",
      data: initialInterestRates,
      draggableY: true,
      dragMinY: 0
    });

    let that = this; // reference to InterestCurveComponent object for inner function
    this.options["plotOptions"] = {
      series: {
        point: {
          events: {
            drop: function () {
              that.changeInterestRate(this.category, this.y);
            }
          }
        }
      }
    };
  }

  /**
   * Updates all chart data of this component
   */
  public updateCharts(data: LoanData) {
    this.updateChartData(0, data.getYearlyInterestRates());
  }

}
