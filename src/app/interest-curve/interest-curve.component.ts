import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Chart, ChartObject, ChartOptions } from "highcharts";
import { InterestValueInterface } from "../model/interest-value-interface";
import { GenericCurveComponent } from "../common/generic-curve-component";
import { LoanData } from "../model/loan-data";
import { LoanInterestDataInterface } from "../model/loan-interest-data-interface";

@Component({
  selector: "app-interest-curve",
  templateUrl: "./interest-curve.component.html",
  styleUrls: ["./interest-curve.component.css"]
})
export class InterestCurveComponent extends GenericCurveComponent implements OnInit {
  @Input() public initialInterestRates: number[];
  @Input() public initialFormValues: LoanInterestDataInterface;
  @Output() public valueChanged = new EventEmitter<InterestValueInterface>();
  @Output() public onSubmit = new EventEmitter<LoanInterestDataInterface>();

  public interestDataForm = new FormGroup({
    interestStart : new FormControl("", [Validators.required, Validators.min(0)]),
    interestEnd : new FormControl("", [Validators.required, Validators.min(0)]),
  });

  constructor() {
    super();
  }

  /**
   * Angular component init hook. Initializes graph with default values.
   */
  public ngOnInit() {
    this.initGraphOptions(this.initialInterestRates);
    if (this.initialFormValues) {
      this.interestDataForm.setValue(this.initialFormValues);
    }
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
   * Emits loan rates for curve reset.
   */
  public onFormSubmit() {
    if (this.interestDataForm.valid) {
      this.onSubmit.emit(this.interestDataForm.value as LoanInterestDataInterface);
    }
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
    this.updateChartData(0, data.yearlyInterestRates);
  }

  /**
   * Returns true if given form component has validation errors.
   *
   * @param formControlName
   */
  public hasError(formControlName: string) {
    return !this.interestDataForm.get(formControlName).valid;
  }


}
