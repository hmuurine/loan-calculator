import { LoanFormDataInterface } from "../model/loan-form-data-interface";
import { LoanPaymentDataInterface } from "../model/loan-payment-data-interface";
import { LoanCalculator } from "./loan-calculator";

export class LoanCalculatorBullet extends LoanCalculator {

    /**
     * Calculates all cost data based on loan size, margin and interest rates.
     * Returns yearly payment values and cumulative values.
     */
    public calculateCostData(formData: LoanFormDataInterface, yearlyInterestRates: number[]): LoanPaymentDataInterface {
        let monthlyPayment: number[] = [];
        let monthlyInterest: number[] = [];
        let cumulativeTotal: number[] = [];
        let cumulativeInterest: number[] = [];

        let loanRemaining = formData.loanAmount;
        let loanMonths = formData.loanYears * 12;
        let monthlyLoanPayment = formData.loanAmount / loanMonths;
        let cumulTotalEur = 0;
        let cumulTotalInterestEur = 0;

        // first pass: calculate interests in the beginning of each year
        for (let i = 0; i <= formData.loanYears; i++) {
            let interestPct = formData.margin + yearlyInterestRates[i];
            let interestEur = loanRemaining * interestPct / 100.0 / 12.0;
            let paymentEur = i < formData.loanYears ? monthlyLoanPayment : 0; // loan already paid at the beginning of last year

            monthlyInterest.push(interestEur);
            monthlyPayment.push(paymentEur);

            loanRemaining -= monthlyLoanPayment * 12;
        }

        // second pass: calculate total yearly payments using the averages of
        // current year and next year start payments
        cumulativeInterest.push(cumulTotalInterestEur);
        cumulativeTotal.push(cumulTotalEur);
        for (let i = 1; i <= formData.loanYears; i++) {
            let yearlyInterestEur = (monthlyInterest[i] + monthlyInterest[i - 1]) / 2 * 12;
            cumulTotalInterestEur += yearlyInterestEur;
            cumulTotalEur += yearlyInterestEur + monthlyLoanPayment * 12;
            cumulativeInterest.push(cumulTotalInterestEur);
            cumulativeTotal.push(cumulTotalEur);
        }

        return {
            yearlyPrincipal: monthlyPayment,
            yearlyInterest: monthlyInterest,
            cumulativeTotal: cumulativeTotal,
            cumulativeInterest: cumulativeInterest
        } as LoanPaymentDataInterface;
    }

}
