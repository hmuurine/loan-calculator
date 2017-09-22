import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { ChartModule } from "angular2-highcharts";
import { HighchartsStatic } from "angular2-highcharts/dist/HighchartsService";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { InterestCurveComponent } from "./interest-curve/interest-curve.component";
import { LoanDataFormComponent } from "./loan-data-form/loan-data-form.component";
import { CostsCurveYearlyComponent } from "./costs-curve-yearly/costs-curve-yearly.component";
import { CostsCurveCumulativeComponent } from "./costs-curve-cumulative/costs-curve-cumulative.component";

declare var require: any;

export function highchartsFactory() {
  const hc = require("highcharts");
  const hcdp = require("highcharts-draggable-points");
  hcdp(hc);

  return hc;
}

@NgModule({
  declarations: [
    AppComponent,
    InterestCurveComponent,
    LoanDataFormComponent,
    CostsCurveYearlyComponent,
    CostsCurveCumulativeComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    ChartModule
  ],
  providers: [
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
