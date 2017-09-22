import { TestBed, async } from "@angular/core/testing";
import { LoanCalculatorEqualAmortization } from "./loan-calculator-equal-amortization";
import { LoanFormDataInterface } from "../model/loan-form-data-interface";
import { LoanPaymentDataInterface } from "../model/loan-payment-data-interface";

describe("LoanCalculatorEqualAmortization", () => {
    it("should calculate interest rate correctly", () => {
        let calculator = new LoanCalculatorEqualAmortization();
        // Base values:
        // year 0: interest 1%
        // year 1: interest 2%
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

        expect(paymentData.yearlyPrincipal[0]).toBe(120);
        expect(paymentData.yearlyInterest[0]).toBe( (120 + 110 + 100 + 90 + 80 + 70 + 60 + 50 + 40 + 30 + 20 + 10) * .01 / 12 );
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

        expect(paymentData.yearlyPrincipal[0]).toBe(120);
        expect(paymentData.yearlyInterest[0]).toBe( 120 * .01 / 12 + 110 * .01 / 12 + 100 * .01 / 12 + 90 * .01 / 12 + 80 * .01 / 12 + 70 * .01 / 12
                                                  + 60 * .015 / 12 + 50 * .015 / 12 + 40 * .015 / 12 + 30 * .015 / 12 + 20 * .015 / 12 + 10 * .015 / 12 );
    });

});
