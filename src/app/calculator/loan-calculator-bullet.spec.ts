import { TestBed, async } from "@angular/core/testing";
import { LoanCalculatorBullet } from "./loan-calculator-bullet";
import { LoanFormDataInterface } from "../model/loan-form-data-interface";
import { LoanPaymentDataInterface } from "../model/loan-payment-data-interface";

describe("LoanCalculatorBullet", () => {
    it("should calculate bullet loan flat interest correctly", () => {
        let calculator = new LoanCalculatorBullet();
        // Base values:
        // year 0: interest 1%
        // year 1: interest 1%
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
        expect(paymentData.yearlyInterest[0].toFixed(2)).toBe((120 * .01).toFixed(2));
    });

    it("should calculate bullet loan increasing interest correctly", () => {
        let calculator = new LoanCalculatorBullet();
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
        expect(paymentData.yearlyInterest[0].toFixed(2)).toBe((6 * (120 * .01 / 12)
                                                  + 6 * (120 * .015 / 12)).toFixed(2) );
    });

    it("should calculate bullet loan increasing interest over two years correctly", () => {
        let calculator = new LoanCalculatorBullet();
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

        expect(paymentData.yearlyPrincipal[0]).toBe(0);
        expect(paymentData.yearlyPrincipal[1]).toBe(240);

        let expectedYearlyInterestYear1 = 6 * 240 * .01 / 12
            + 6 * 240 * .015 / 12;


        let expectedYearlyInterestYear2 = 6 * 240 * .02 / 12
            + 6 * 240 * .025 / 12;

        expect(paymentData.yearlyInterest[0].toFixed(2)).toBe(expectedYearlyInterestYear1.toFixed(2));
        expect(paymentData.yearlyInterest[1].toFixed(2)).toBe(expectedYearlyInterestYear2.toFixed(2));
        expect(paymentData.cumulativeInterest[2].toFixed(2)).toBe((expectedYearlyInterestYear1 + expectedYearlyInterestYear2).toFixed(2));
        expect(paymentData.cumulativeTotal[2].toFixed(2))
            .toBe((expectedYearlyInterestYear1 + expectedYearlyInterestYear2 + loanForm.loanAmount).toFixed(2));
    });

});
