import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-interest-curve",
  templateUrl: "./interest-curve.component.html",
  styleUrls: ["./interest-curve.component.css"]
})
export class InterestCurveComponent implements OnInit {

  constructor() {
    this.options = {
      title : { text : "simple chart" },
      chart: {
        animation: false
      },
      series: [{
          data: [1.0, 1.0, 1.5, 2, 2.5, 3, 4, 5, 5, 5, 5, 5],
          draggableY: true,
          dragMinY: 0
      }]
    };
  }
  
  options: Object;
  
  ngOnInit() {
  }

}
