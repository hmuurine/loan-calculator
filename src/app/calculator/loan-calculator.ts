import { LoanFormDataInterface } from "../model/loan-form-data-interface";
import { LoanPaymentDataInterface } from "../model/loan-payment-data-interface";

export abstract class LoanCalculator {

    /**
     * Returns interest at given year/month with given yearly interest rates and interest adjustment period.
     * Assumes that interest increases linearily from year n to year n+1 within the year.
     * 
     * @param year 0 == first year of loan
     * @param month month number, 0 == January, 11 == December
     * @param yearlyInterestRates 
     * @param interestAdjustmentPeriod 
     */
    public getInterestAt(year: number, month: number, yearlyInterestRates: number[], interestAdjustmentPeriod: number) {
        if (year < 0 || year >= yearlyInterestRates.length - 1 || month < 0 || month > 11 || interestAdjustmentPeriod < 1) {
            throw Error("Invalid argument");
        }
        let monthsFromStart = year * 12 + month;

        // interest adjusted every interestAdjustmentPeriod months. Calculate the previous adjustment time:
        let interestAdjustmentMonthFromStart = monthsFromStart - (monthsFromStart % interestAdjustmentPeriod);
        let interestAdjustmentYear = Math.floor(interestAdjustmentMonthFromStart / 12);
        let interestAdjustmentMonth = interestAdjustmentMonthFromStart % 12;

        let yearStartInterest = yearlyInterestRates[interestAdjustmentYear];
        let yearEndInterest = yearlyInterestRates[interestAdjustmentYear + 1];

        // assume linear interest rate increase/decrease within the year:
        return yearStartInterest + (yearEndInterest - yearStartInterest) / 12 * interestAdjustmentMonth;
    }

    /**
     * Calculates all cost data based on loan size, margin interest rates and monthly principal.
     * Returns yearly payment values and cumulative values.
     */
    protected calculateCostDataFixedPrincipal(formData: LoanFormDataInterface, yearlyInterestRates: number[],
                             monthlyLoanPrincipal: number): LoanPaymentDataInterface {
        let yearlyPrincipal: number[] = [];
        let yearlyInterest: number[] = [];
        let cumulativeTotal: number[] = [];
        let cumulativeInterest: number[] = [];

        let loanRemaining = formData.loanAmount;
        let yearlyLoanPrincipal = monthlyLoanPrincipal * 12;
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
        // finally if there is any loan left, pay the rest at the end of the loan period (mainly for bullet loans)
        if (loanRemaining > 0) {
            yearlyPrincipal[yearlyPrincipal.length - 1] += loanRemaining;
            cumulativeTotal[cumulativeTotal.length - 1] += loanRemaining;
        }

        return {
            yearlyPrincipal: yearlyPrincipal,
            yearlyInterest: yearlyInterest,
            cumulativeTotal: cumulativeTotal,
            cumulativeInterest: cumulativeInterest
        } as LoanPaymentDataInterface;
    }

    /**
     * Calculates all cost data based on loan size, margin and interest rates.
     * Returns yearly payment values and cumulative values.
     */
    public abstract calculateCostData(formData: LoanFormDataInterface, yearlyInterestRates: number[]): LoanPaymentDataInterface;

}
