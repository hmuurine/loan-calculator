import { TestBed, async } from "@angular/core/testing";
import { LoanCalculatorEqualAmortization } from "./loan-calculator-equal-amortization";
import { LoanFormDataInterface } from "../model/loan-form-data-interface";
import { LoanPaymentDataInterface } from "../model/loan-payment-data-interface";

describe("LoanCalculatorEqualAmortization", () => {
    it("should calculate interest rate correctly", () => {
        let calculator = new LoanCalculatorEqualAmortization();
        // Base values:
        // year 0: interest 1%
        // year 1: interest 1%
        let yearlyInteterstRates = [1, 2];
        let interestAdjustmentPeriod = 6; // months
        expect(calculator.getInterestAt(0, 0, yearlyInteterstRates, interestAdjustmentPeriod)).toBe(1);
        expect(calculator.getInterestAt(0, 3, yearlyInteterstRates, interestAdjustmentPeriod)).toBe(1);
        expect(calculator.getInterestAt(0, 6, yearlyInteterstRates, interestAdjustmentPeriod)).toBe(1.5);
        expect(calculator.getInterestAt(0, 11, yearlyInteterstRates, interestAdjustmentPeriod)).toBe(1.5);
    });

    it("should calculate flat interest correctly", () => {
        let calculator = new LoanCalculatorEqualAmortization();
        // Base values:
        // year 0: interest 1%
        // year 1: interest 2%
        let yearlyInteterstRates = [1, 1];
        let interestAdjustmentPeriod = 12; // months
        let loanForm = {
            loanAmount: 120,
            interestAdjustementPeriod: 12,
            interestStart: 1,
            interestEnd: 1,
            loanType: 0,
            loanYears: 1,
            margin: 0
        } as LoanFormDataInterface;
        let paymentData = calculator.calculateCostData(loanForm, yearlyInteterstRates);

        expect(paymentData.yearlyPrincipal[0].toFixed(2)).toBe((120).toFixed(2));
        expect(paymentData.yearlyInterest[0].toFixed(2))
            .toBe(((120 + 110 + 100 + 90 + 80 + 70 + 60 + 50 + 40 + 30 + 20 + 10) * .01 / 12).toFixed(2));
    });

    it("should calculate increasing interest correctly", () => {
        let calculator = new LoanCalculatorEqualAmortization();
        // Base values:
        // year 0: interest 1%
        // year 1: interest 2%
        let yearlyInteterstRates = [1, 2];
        let interestAdjustmentPeriod = 6; // months
        let loanForm = {
            loanAmount: 120,
            interestAdjustementPeriod: 6,
            interestStart: 1,
            interestEnd: 2,
            loanType: 0,
            loanYears: 1,
            margin: 0
        } as LoanFormDataInterface;
        let paymentData = calculator.calculateCostData(loanForm, yearlyInteterstRates);

        expect(paymentData.yearlyPrincipal[0].toFixed(2)).toBe((120).toFixed(2));
        expect(paymentData.yearlyInterest[0].toFixed(2)).toBe((120 * .01 / 12 + 110 * .01 / 12 + 100 * .01 / 12
                                                  + 90 * .01 / 12 + 80 * .01 / 12 + 70 * .01 / 12
                                                  + 60 * .015 / 12 + 50 * .015 / 12 + 40 * .015 / 12
                                                  + 30 * .015 / 12 + 20 * .015 / 12 + 10 * .015 / 12).toFixed(2));
    });

    it("should calculate increasing interest over two years correctly", () => {
        let calculator = new LoanCalculatorEqualAmortization();
        // Base values:
        // year 0: interest 1%
        // year 1: interest 2%
        let yearlyInteterstRates = [1, 2, 3];
        let interestAdjustmentPeriod = 6; // months
        let loanForm = {
            loanAmount: 240,
            interestAdjustementPeriod: 6,
            interestStart: 1,
            interestEnd: 3,
            loanType: 0,
            loanYears: 2,
            margin: 0
        } as LoanFormDataInterface;
        let paymentData = calculator.calculateCostData(loanForm, yearlyInteterstRates);

        expect(paymentData.yearlyPrincipal[0].toFixed(2)).toBe((120).toFixed(2));
        expect(paymentData.yearlyPrincipal[1].toFixed(2)).toBe((120).toFixed(2));

        let expectedYearlyInterestYear1 =  240 * .01 / 12 + 230 * .01 / 12 + 220 * .01 / 12
            + 210 * .01 / 12 + 200 * .01 / 12 + 190 * .01 / 12
            + 180 * .015 / 12 + 170 * .015 / 12 + 160 * .015 / 12
            + 150 * .015 / 12 + 140 * .015 / 12 + 130 * .015 / 12;

        let expectedYearlyInterestYear2 = 120 * .02 / 12 + 110 * .02 / 12 + 100 * .02 / 12
            + 90 * .02 / 12 + 80 * .02 / 12 + 70 * .02 / 12
            + 60 * .025 / 12 + 50 * .025 / 12 + 40 * .025 / 12
            + 30 * .025 / 12 + 20 * .025 / 12 + 10 * .025 / 12;

        expect(paymentData.yearlyInterest[0].toFixed(2)).toBe(expectedYearlyInterestYear1.toFixed(2));
        expect(paymentData.yearlyInterest[1].toFixed(2)).toBe(expectedYearlyInterestYear2.toFixed(2));
        expect(paymentData.cumulativeInterest[2].toFixed(2)).toBe((expectedYearlyInterestYear1 + expectedYearlyInterestYear2).toFixed(2));
        expect(paymentData.cumulativeTotal[2].toFixed(2))
            .toBe((expectedYearlyInterestYear1 + expectedYearlyInterestYear2 + loanForm.loanAmount).toFixed(2));
    });

});
