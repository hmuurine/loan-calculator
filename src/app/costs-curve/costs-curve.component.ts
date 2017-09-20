import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-costs-curve",
  templateUrl: "./costs-curve.component.html",
  styleUrls: ["./costs-curve.component.css"]
})
export class CostsCurveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // TODO: samaan käppyrään viivadiagrammilla kumul. korot ja kumul. korot+lyhennykset
  // lisäksi pylväsdiagrammilla vuosittain keskim. kuukausierä, ja palkki vielä väreillä jaettu kahtia: korot, lyhennys

}
