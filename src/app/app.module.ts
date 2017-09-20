import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { ChartModule } from "angular2-highcharts";
import { HighchartsStatic } from "angular2-highcharts/dist/HighchartsService";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { InterestCurveComponent } from "./interest-curve/interest-curve.component";
import { CostsCurveComponent } from "./costs-curve/costs-curve.component";

declare var require: any;

export function highchartsFactory() {
  const hc = require("highcharts");
  const dd = require("highcharts-draggable-points");
  dd(hc);

  return hc;
}

@NgModule({
  declarations: [
    AppComponent,
    InterestCurveComponent,
    CostsCurveComponent,
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
