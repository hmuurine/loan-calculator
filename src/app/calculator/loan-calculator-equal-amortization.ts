import { LoanFormDataInterface } from "../model/loan-form-data-interface";
import { LoanPaymentDataInterface } from "../model/loan-payment-data-interface";
import { LoanCalculator } from "./loan-calculator";

export class LoanCalculatorEqualAmortization extends LoanCalculator {

    /**
     * Calculates all cost data based on loan size, margin and interest rates.
     * Returns yearly payment values and cumulative values.
     */
    public calculateCostData(formData: LoanFormDataInterface, yearlyInterestRates: number[]): LoanPaymentDataInterface {
        let yearlyPrincipal: number[] = [];
        let yearlyInterest: number[] = [];
        let cumulativeTotal: number[] = [];
        let cumulativeInterest: number[] = [];

        let loanRemaining = formData.loanAmount;
        let loanMonths = formData.loanYears * 12;
        let monthlyLoanPrincipal = formData.loanAmount / loanMonths;
        let yearlyLoanPrincipal = formData.loanAmount / formData.loanYears;
        let cumulTotalEur = 0;
        let cumulTotalInterestEur = 0;

        // cumulative values start at 0 and increase by the end of next year by yearly amounts. Add first zeros:
        cumulativeInterest.push(cumulTotalInterestEur);
        cumulativeTotal.push(cumulTotalEur);

        for (let year = 0; year < formData.loanYears; year++) {
            let cumulativeYearlyInterest = 0;
            for (let month = 0; month < 12; month++) {
                let interestPct = this.getInterestAt(year, month, yearlyInterestRates, formData.interestAdjustementPeriod);
                let interestEur = loanRemaining * interestPct / 100 / 12;
                cumulativeYearlyInterest += interestEur;
                loanRemaining -= monthlyLoanPrincipal;
            }
            yearlyInterest.push(cumulativeYearlyInterest);
            yearlyPrincipal.push(yearlyLoanPrincipal);

            cumulTotalEur += cumulativeYearlyInterest + yearlyLoanPrincipal;
            cumulTotalInterestEur += cumulativeYearlyInterest;
            cumulativeInterest.push(cumulTotalInterestEur);
            cumulativeTotal.push(cumulTotalEur);

        }

        return {
            yearlyPrincipal: yearlyPrincipal,
            yearlyInterest: yearlyInterest,
            cumulativeTotal: cumulativeTotal,
            cumulativeInterest: cumulativeInterest
        } as LoanPaymentDataInterface;
    }

}
