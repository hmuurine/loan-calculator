webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fadein {\r\n    animation:fadein 1s;\r\n    -moz-animation:fadein 1s; /* Firefox */\r\n    -webkit-animation:fadein 1s; /* Safari and Chrome */\r\n    -o-animation:fadein 1s; /* Opera */\r\n}\r\n\r\n@keyframes fadein {\r\n    0% {opacity:0;}\r\n    100% {opacity:1;}\r\n }\r\n \r\n @-webkit-keyframes fadein { /* Safari and Chrome */\r\n    0% {opacity:0;}\r\n    100% {opacity:1;}\r\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h2>Loan calculator</h2>\r\n  <app-loan-data-form\r\n    [initialValues]=\"model.getFormData()\"\r\n    (onSubmit)=\"initGraphs($event)\">\r\n  </app-loan-data-form>\r\n  <div *ngIf=\"model.graphsInitialized()\" class=\"fadein\">\r\n    <hr/>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4 col-sm-12\">\r\n        <app-interest-curve\r\n          [initialInterestRates]=\"model.getYearlyInterestRates()\"\r\n          (valueChanged)=\"updateInterestRate($event)\">\r\n        </app-interest-curve>\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-12\">\r\n        <app-costs-curve-monthly\r\n          [initialMonthlyPayment]=\"model.getMonthlyPayment()\"\r\n          [initialMonthlyInterest]=\"model.getMonthlyInterest()\">\r\n        </app-costs-curve-monthly>\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-12\">\r\n        <app-costs-curve-cumulative\r\n          [initialCumulativeTotal]=\"model.getCumulativeTotal()\"\r\n          [initialCumulativeInterest]=\"model.getCumulativeInterest()\">\r\n        </app-costs-curve-cumulative>\r\n      </div>\r\n    </div>\r\n    <hr/>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 col-sm-12 form-group\">\r\n        <label for=\"totalCosts\">Cumulative costs (&euro;)</label>\r\n        <input type=\"number\" class=\"form-control\" id=\"totalCosts\" [value]=\"model.getTotalCosts()\" disabled=\"disabled\">\r\n      </div>\r\n      <div class=\"col-md-6 col-sm-12 form-group\">\r\n        <label for=\"totalInterest\">Cumulative interest (&euro;)</label>\r\n        <input type=\"number\" class=\"form-control\" id=\"totalInterest\" [value]=\"model.getTotalInterest()\" disabled=\"disabled\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_loan_data__ = __webpack_require__("../../../../../src/app/model/loan-data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interest_curve_interest_curve_component__ = __webpack_require__("../../../../../src/app/interest-curve/interest-curve.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__costs_curve_monthly_costs_curve_monthly_component__ = __webpack_require__("../../../../../src/app/costs-curve-monthly/costs-curve-monthly.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__costs_curve_cumulative_costs_curve_cumulative_component__ = __webpack_require__("../../../../../src/app/costs-curve-cumulative/costs-curve-cumulative.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent() {
        this.model = new __WEBPACK_IMPORTED_MODULE_1__model_loan_data__["a" /* LoanData */]();
    }
    /**
     * Initializes graphs after initial data submit.
     *
     * @param loanDataForm
     */
    AppComponent.prototype.initGraphs = function (loanDataForm) {
        this.model.setFormData(loanDataForm);
        this.updateCharts();
    };
    /**
     * Function that's called when modifying a single yearly interest.
     *
     * @param rate
     */
    AppComponent.prototype.updateInterestRate = function (rate) {
        this.model.setYearlyInterestRate(rate.idx, rate.value);
        this.updateCharts();
    };
    /**
     * Update data for all the charts.
     */
    AppComponent.prototype.updateCharts = function () {
        for (var _i = 0, _a = [this.interestCurve, this.costsCurveMonthly, this.costsCurveCumulative]; _i < _a.length; _i++) {
            var chart = _a[_i];
            if (chart) {
                chart.updateCharts(this.model);
            }
        }
    };
    return AppComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__interest_curve_interest_curve_component__["a" /* InterestCurveComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__interest_curve_interest_curve_component__["a" /* InterestCurveComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__interest_curve_interest_curve_component__["a" /* InterestCurveComponent */]) === "function" && _a || Object)
], AppComponent.prototype, "interestCurve", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__costs_curve_monthly_costs_curve_monthly_component__["a" /* CostsCurveMonthlyComponent */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__costs_curve_monthly_costs_curve_monthly_component__["a" /* CostsCurveMonthlyComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__costs_curve_monthly_costs_curve_monthly_component__["a" /* CostsCurveMonthlyComponent */]) === "function" && _b || Object)
], AppComponent.prototype, "costsCurveMonthly", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__costs_curve_cumulative_costs_curve_cumulative_component__["a" /* CostsCurveCumulativeComponent */]),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__costs_curve_cumulative_costs_curve_cumulative_component__["a" /* CostsCurveCumulativeComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__costs_curve_cumulative_costs_curve_cumulative_component__["a" /* CostsCurveCumulativeComponent */]) === "function" && _c || Object)
], AppComponent.prototype, "costsCurveCumulative", void 0);
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-root",
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export highchartsFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_highcharts__ = __webpack_require__("../../../../angular2-highcharts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_highcharts_dist_HighchartsService__ = __webpack_require__("../../../../angular2-highcharts/dist/HighchartsService.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_highcharts_dist_HighchartsService___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_highcharts_dist_HighchartsService__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__interest_curve_interest_curve_component__ = __webpack_require__("../../../../../src/app/interest-curve/interest-curve.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__loan_data_form_loan_data_form_component__ = __webpack_require__("../../../../../src/app/loan-data-form/loan-data-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__costs_curve_monthly_costs_curve_monthly_component__ = __webpack_require__("../../../../../src/app/costs-curve-monthly/costs-curve-monthly.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__costs_curve_cumulative_costs_curve_cumulative_component__ = __webpack_require__("../../../../../src/app/costs-curve-cumulative/costs-curve-cumulative.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











function highchartsFactory() {
    var hc = __webpack_require__("../../../../highcharts/highcharts.js");
    var hcdp = __webpack_require__("../../../../highcharts-draggable-points/draggable-points.js");
    hcdp(hc);
    return hc;
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__interest_curve_interest_curve_component__["a" /* InterestCurveComponent */],
            __WEBPACK_IMPORTED_MODULE_8__loan_data_form_loan_data_form_component__["a" /* LoanDataFormComponent */],
            __WEBPACK_IMPORTED_MODULE_9__costs_curve_monthly_costs_curve_monthly_component__["a" /* CostsCurveMonthlyComponent */],
            __WEBPACK_IMPORTED_MODULE_10__costs_curve_cumulative_costs_curve_cumulative_component__["a" /* CostsCurveCumulativeComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3_angular2_highcharts__["ChartModule"]
        ],
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_4_angular2_highcharts_dist_HighchartsService__["HighchartsStatic"],
                useFactory: highchartsFactory
            }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/common/generic-curve-component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenericCurveComponent; });
/**
 * Common parent class for all Highcharts components
 */
var GenericCurveComponent = (function () {
    function GenericCurveComponent() {
    }
    /**
     * Method for saving Highcharts object for Angular use.
     *
     * @param ch
     */
    GenericCurveComponent.prototype.saveChartInstance = function (ch) {
        this.chart = ch;
    };
    /**
     * Generates base Highcharts graph option structure
     */
    GenericCurveComponent.prototype.generateGraphOptions = function (title, xTitle, yTitle, animation) {
        return {
            title: { text: title },
            xAxis: {
                title: {
                    text: xTitle
                }
            },
            yAxis: {
                title: {
                    text: yTitle
                }
            },
            chart: {
                animation: animation
            },
            tooltip: {
                valueDecimals: 2,
                headerFormat: "<span style='font-size: 10px'>Year {point.key}</span><br/>"
            },
            series: []
        };
    };
    /**
     * Updates chart data
     *
     * @param chartIdx
     * @param chartData
     */
    GenericCurveComponent.prototype.updateChartData = function (chartIdx, chartData) {
        if (this.chart && this.chart.series && chartIdx < this.chart.series.length) {
            this.chart.series[chartIdx].setData(chartData);
        }
    };
    return GenericCurveComponent;
}());

//# sourceMappingURL=generic-curve-component.js.map

/***/ }),

/***/ "../../../../../src/app/common/generic-curve.component.html":
/***/ (function(module, exports) {

module.exports = "<chart [options]=\"options\" (load)=\"saveChartInstance($event.context)\"></chart>\r\n"

/***/ }),

/***/ "../../../../../src/app/common/loan-form-data-interface.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=loan-form-data-interface.js.map

/***/ }),

/***/ "../../../../../src/app/costs-curve-cumulative/costs-curve-cumulative.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/costs-curve-cumulative/costs-curve-cumulative.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CostsCurveCumulativeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_generic_curve_component__ = __webpack_require__("../../../../../src/app/common/generic-curve-component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CostsCurveCumulativeComponent = (function (_super) {
    __extends(CostsCurveCumulativeComponent, _super);
    function CostsCurveCumulativeComponent() {
        return _super.call(this) || this;
    }
    /**
     * Angular component init hook. Initializes graph with initial values.
     */
    CostsCurveCumulativeComponent.prototype.ngOnInit = function () {
        this.initGraphOptions(this.initialCumulativeTotal, this.initialCumulativeInterest);
    };
    /**
     * Initialize Highcarts chart options.
     *
     * @param initialInterestRates
     * @param loanAmount
     * @param margin
     */
    CostsCurveCumulativeComponent.prototype.initGraphOptions = function (cumulativeTotal, cumulativeInterest) {
        this.options = this.generateGraphOptions("Cumulative costs over time", "Year", "Costs (€)", true);
        this.options["series"].push({
            name: "Cumulative interest (€)",
            data: cumulativeInterest,
        });
        this.options["series"].push({
            name: "Cumulative total cost (€)",
            data: cumulativeTotal,
        });
    };
    /**
     * Updates all chart data of this component
     */
    CostsCurveCumulativeComponent.prototype.updateCharts = function (data) {
        this.updateChartData(0, data.getCumulativeInterest());
        this.updateChartData(1, data.getCumulativeTotal());
    };
    return CostsCurveCumulativeComponent;
}(__WEBPACK_IMPORTED_MODULE_1__common_generic_curve_component__["a" /* GenericCurveComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], CostsCurveCumulativeComponent.prototype, "initialCumulativeTotal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], CostsCurveCumulativeComponent.prototype, "initialCumulativeInterest", void 0);
CostsCurveCumulativeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-costs-curve-cumulative",
        template: __webpack_require__("../../../../../src/app/common/generic-curve.component.html"),
        styles: [__webpack_require__("../../../../../src/app/costs-curve-cumulative/costs-curve-cumulative.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CostsCurveCumulativeComponent);

//# sourceMappingURL=costs-curve-cumulative.component.js.map

/***/ }),

/***/ "../../../../../src/app/costs-curve-monthly/costs-curve-monthly.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/costs-curve-monthly/costs-curve-monthly.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CostsCurveMonthlyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_generic_curve_component__ = __webpack_require__("../../../../../src/app/common/generic-curve-component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CostsCurveMonthlyComponent = (function (_super) {
    __extends(CostsCurveMonthlyComponent, _super);
    function CostsCurveMonthlyComponent() {
        return _super.call(this) || this;
    }
    /**
     * Angular component init hook. Initializes graph with initial values.
     */
    CostsCurveMonthlyComponent.prototype.ngOnInit = function () {
        this.initGraphOptions(this.initialMonthlyPayment, this.initialMonthlyInterest);
    };
    /**
     * Initialize Highcarts chart options.
     *
     * @param initialInterestRates
     * @param loanAmount
     * @param margin
     */
    CostsCurveMonthlyComponent.prototype.initGraphOptions = function (monthlyPayment, monthlyInterest) {
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
    };
    /**
     * Updates all chart data of this component
     */
    CostsCurveMonthlyComponent.prototype.updateCharts = function (data) {
        this.updateChartData(0, data.getMonthlyInterest());
        this.updateChartData(1, data.getMonthlyPayment());
    };
    return CostsCurveMonthlyComponent;
}(__WEBPACK_IMPORTED_MODULE_1__common_generic_curve_component__["a" /* GenericCurveComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], CostsCurveMonthlyComponent.prototype, "initialMonthlyPayment", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], CostsCurveMonthlyComponent.prototype, "initialMonthlyInterest", void 0);
CostsCurveMonthlyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-costs-curve-monthly",
        template: __webpack_require__("../../../../../src/app/common/generic-curve.component.html"),
        styles: [__webpack_require__("../../../../../src/app/costs-curve-monthly/costs-curve-monthly.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CostsCurveMonthlyComponent);

//# sourceMappingURL=costs-curve-monthly.component.js.map

/***/ }),

/***/ "../../../../../src/app/interest-curve/interest-curve.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/interest-curve/interest-curve.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterestCurveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_generic_curve_component__ = __webpack_require__("../../../../../src/app/common/generic-curve-component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InterestCurveComponent = (function (_super) {
    __extends(InterestCurveComponent, _super);
    function InterestCurveComponent() {
        var _this = _super.call(this) || this;
        _this.valueChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        return _this;
    }
    /**
     * Angular component init hook. Initializes graph with default values.
     */
    InterestCurveComponent.prototype.ngOnInit = function () {
        this.initGraphOptions(this.initialInterestRates);
    };
    /**
     * Highcharts draggable points drop event calls this.
     *
     * @param idx
     * @param value
     */
    InterestCurveComponent.prototype.changeInterestRate = function (idx, value) {
        this.valueChanged.emit({ idx: idx, value: value });
    };
    /**
     * Initialize Highcarts chart options.
     *
     * @param initialInterestRates
     */
    InterestCurveComponent.prototype.initGraphOptions = function (initialInterestRates) {
        this.options = this.generateGraphOptions("Yearly interest rate<br>(drag & drop to fine-tune)", "Year", "Interest rate (%)", false);
        this.options["series"].push({
            name: "Interest rate (%)",
            data: initialInterestRates,
            draggableY: true,
            dragMinY: 0
        });
        var that = this; // reference to InterestCurveComponent object for inner function
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
    };
    /**
     * Updates all chart data of this component
     */
    InterestCurveComponent.prototype.updateCharts = function (data) {
        this.updateChartData(0, data.getYearlyInterestRates());
    };
    return InterestCurveComponent;
}(__WEBPACK_IMPORTED_MODULE_1__common_generic_curve_component__["a" /* GenericCurveComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], InterestCurveComponent.prototype, "initialInterestRates", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], InterestCurveComponent.prototype, "valueChanged", void 0);
InterestCurveComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-interest-curve",
        template: __webpack_require__("../../../../../src/app/common/generic-curve.component.html"),
        styles: [__webpack_require__("../../../../../src/app/interest-curve/interest-curve.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InterestCurveComponent);

//# sourceMappingURL=interest-curve.component.js.map

/***/ }),

/***/ "../../../../../src/app/loan-data-form/loan-data-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/loan-data-form/loan-data-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"loanDataForm\" (submit)=\"onFormSubmit()\">\n  <div *ngIf=\"showValidationError && hasErrors()\" class=\"alert alert-warning\">\n    Check input values\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6 col-sm-12 form-group\" [ngClass]=\"{ 'has-error': hasError('loanAmount') }\">\n      <label for=\"loanAmount\">Loan amount (&euro;)</label>\n      <input type=\"number\" class=\"form-control\" id=\"loanAmount\" placeholder=\"Enter amount\" formControlName=\"loanAmount\">\n    </div>\n    <div class=\"col-md-6 col-sm-12 form-group\" [ngClass]=\"{ 'has-error': hasError('loanYears') }\">\n      <label for=\"loanYears\">Loan duration (years)</label>\n      <input type=\"number\" class=\"form-control\" id=\"loanYears\" placeholder=\"Enter years\" formControlName=\"loanYears\">\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6 col-sm-12 form-group\" [ngClass]=\"{ 'has-error': hasError('interestStart') }\">\n      <label for=\"interestStart\">Interest rate at the beginning (%)</label>\n      <input type=\"number\" class=\"form-control\" id=\"interestStart\" placeholder=\"Enter amount\" formControlName=\"interestStart\">\n    </div>\n    <div class=\"col-md-6 col-sm-12 form-group\" [ngClass]=\"{ 'has-error': hasError('interestEnd') }\">\n      <label for=\"interestEnd\">Interest rate at the end (%)</label>\n      <input type=\"number\" class=\"form-control\" id=\"interestEnd\" placeholder=\"Enter years\" formControlName=\"interestEnd\">\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6 col-sm-12 form-group\" [ngClass]=\"{ 'has-error': hasError('margin') }\">\n      <label for=\"margin\">Margin rate (%)</label>\n      <input type=\"number\" class=\"form-control\" id=\"margin\" placeholder=\"Enter amount\" formControlName=\"margin\">\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6 col-sm-12\">\n      <button type=\"submit\" class=\"btn btn-primary\" [ngClass]=\"{ disabled: !loanDataForm.valid }\">Select</button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/loan-data-form/loan-data-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoanDataFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_loan_form_data_interface__ = __webpack_require__("../../../../../src/app/common/loan-form-data-interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_loan_form_data_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__common_loan_form_data_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoanDataFormComponent = (function () {
    function LoanDataFormComponent() {
        this.onSubmit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.loanDataForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            loanAmount: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](200000, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].min(0)]),
            loanYears: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](15, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].min(1)]),
            interestStart: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](1, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].min(0)]),
            interestEnd: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](5, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].min(0)]),
            margin: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](1, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].min(0)]),
        });
        this.ngUnsubscribe = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    /**
     * Angular component init hook. Sets initial values, if given.
     */
    LoanDataFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.initialValues) {
            this.loanDataForm.patchValue(this.initialValues);
        }
        // delay showing validation error message until user stops typing:
        this.loanDataForm.valueChanges.takeUntil(this.ngUnsubscribe).debounceTime(500).subscribe(function () { return _this.showValidationError = !_this.loanDataForm.valid; });
    };
    /**
     * Angular component destroy hook. Terminates value changed listener Observables.
     */
    LoanDataFormComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    /**
     * When form is submitted, and it's valid emit event to parent component.
     */
    LoanDataFormComponent.prototype.onFormSubmit = function () {
        if (this.loanDataForm.valid) {
            this.onSubmit.emit(this.loanDataForm.value);
        }
    };
    /**
     * Returns true if given form component has validation errors.
     *
     * @param formControlName
     */
    LoanDataFormComponent.prototype.hasError = function (formControlName) {
        return !this.loanDataForm.get(formControlName).valid;
    };
    /**
     * Returns true if the entire form is invalid
     */
    LoanDataFormComponent.prototype.hasErrors = function () {
        return !this.loanDataForm.valid;
    };
    return LoanDataFormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__common_loan_form_data_interface__["LoanFormDataInterface"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_loan_form_data_interface__["LoanFormDataInterface"]) === "function" && _a || Object)
], LoanDataFormComponent.prototype, "initialValues", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], LoanDataFormComponent.prototype, "onSubmit", void 0);
LoanDataFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-loan-data-form",
        template: __webpack_require__("../../../../../src/app/loan-data-form/loan-data-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/loan-data-form/loan-data-form.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LoanDataFormComponent);

var _a;
//# sourceMappingURL=loan-data-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/model/loan-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoanData; });
var LoanData = (function () {
    function LoanData() {
    }
    /**
     * Returns formData.
     */
    LoanData.prototype.getFormData = function () {
        return this.formData;
    };
    /**
     * Sets loan basic information, and calculates initial interest rates
     * based on the input.
     *
     * @param data
     */
    LoanData.prototype.setFormData = function (data) {
        this.yearlyInterestRates = this.computeInitialInterestRates(data.interestStart, data.interestEnd, data.loanYears);
        this.formData = data;
        this.updateCostData();
    };
    /**
     * Is data needed by the graph initialized?
     */
    LoanData.prototype.graphsInitialized = function () {
        return this.formData !== undefined;
    };
    /**
     * Return interest rates.
     */
    LoanData.prototype.getYearlyInterestRates = function () {
        return this.yearlyInterestRates;
    };
    /**
     * Return total payment €/month at the start of each year.
     */
    LoanData.prototype.getMonthlyPayment = function () {
        return this.monthlyPayment;
    };
    /**
     * Return interest part of €/month payment as the start of each year.
     */
    LoanData.prototype.getMonthlyInterest = function () {
        return this.monthlyInterest;
    };
    /**
     * Returns cumulative total payments at the start of each year.
     */
    LoanData.prototype.getCumulativeTotal = function () {
        return this.cumulativeTotal;
    };
    /**
     * Returns cumulaitve total interest payment at the start of each year.
     */
    LoanData.prototype.getCumulativeInterest = function () {
        return this.cumulativeInterest;
    };
    /**
     * Total cumulative costs at the end of loan period
     */
    LoanData.prototype.getTotalCosts = function () {
        var cumulArray = this.getCumulativeTotal();
        return cumulArray && cumulArray.length > 0 ? Math.round(cumulArray[cumulArray.length - 1]) : "";
    };
    /**
     * Total cumulative interest at the end of loan period
     */
    LoanData.prototype.getTotalInterest = function () {
        var cumulArray = this.getCumulativeInterest();
        return cumulArray && cumulArray.length > 0 ? Math.round(cumulArray[cumulArray.length - 1]) : "";
    };
    /**
     * Sets interest rate for year idx.
     *
     * @param idx
     * @param value
     */
    LoanData.prototype.setYearlyInterestRate = function (idx, value) {
        if (idx >= 0 && idx < this.yearlyInterestRates.length) {
            var clone = this.yearlyInterestRates.slice();
            clone[idx] = value;
            this.yearlyInterestRates = clone;
            this.updateCostData();
        }
        else {
            throw Error("invalid idx");
        }
    };
    /**
     * Generates a linearily increasing interest curve.
     *
     * @param interestStart
     * @param interestEnd
     * @param loanYears
     */
    LoanData.prototype.computeInitialInterestRates = function (interestStart, interestEnd, loanYears) {
        var rates = [];
        var step = (interestEnd - interestStart) / loanYears;
        for (var i = 0; i <= loanYears; i++) {
            rates.push(interestStart + i * step);
        }
        return rates;
    };
    /**
     * Calculates all cost data based on loan size, margin and interest rates.
     * Updates model values.
     */
    LoanData.prototype.updateCostData = function () {
        var monthlyPayment = [];
        var monthlyInterest = [];
        var cumulativeTotal = [];
        var cumulativeInterest = [];
        var loanRemaining = this.formData.loanAmount;
        var loanMonths = this.formData.loanYears * 12;
        var monthlyLoanPayment = this.formData.loanAmount / loanMonths;
        var cumulTotalEur = 0;
        var cumulTotalInterestEur = 0;
        // first pass: calculate interests in the beginning of each year
        for (var i = 0; i <= this.formData.loanYears; i++) {
            var interestPct = this.formData.margin + this.yearlyInterestRates[i];
            var interestEur = loanRemaining * interestPct / 100.0 / 12.0;
            var paymentEur = i < this.formData.loanYears ? monthlyLoanPayment : 0; // loan already paid at the beginning of last year
            monthlyInterest.push(interestEur);
            monthlyPayment.push(paymentEur);
            loanRemaining -= monthlyLoanPayment * 12;
        }
        // second pass: calculate total yearly payments using the averages of
        // current year and next year start payments
        cumulativeInterest.push(cumulTotalInterestEur);
        cumulativeTotal.push(cumulTotalEur);
        for (var i = 1; i <= this.formData.loanYears; i++) {
            var yearlyInterestEur = (monthlyInterest[i] + monthlyInterest[i - 1]) / 2 * 12;
            cumulTotalInterestEur += yearlyInterestEur;
            cumulTotalEur += yearlyInterestEur + monthlyLoanPayment * 12;
            cumulativeInterest.push(cumulTotalInterestEur);
            cumulativeTotal.push(cumulTotalEur);
        }
        this.monthlyPayment = monthlyPayment;
        this.monthlyInterest = monthlyInterest;
        this.cumulativeTotal = cumulativeTotal;
        this.cumulativeInterest = cumulativeInterest;
    };
    return LoanData;
}());

//# sourceMappingURL=loan-data.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map