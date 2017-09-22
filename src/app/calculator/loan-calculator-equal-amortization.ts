import { LoanFormDataInterface } from "../model/loan-form-data-interface";
import { LoanPaymentDataInterface } from "../model/loan-payment-data-interface";
import { LoanCalculator } from "./loan-calculator";

export class LoanCalculatorEqualAmortization extends LoanCalculator {

    /**
     * Calculates all cost data based on loan size, margin and interest rates.
     * Returns yearly payment values and cumulative values.
     */
    public calculateCostData(formData: LoanFormDataInterface, yearlyInterestRates: number[]): LoanPaymentDataInterface {
        let loanMonths = formData.loanYears * 12;
        let monthlyLoanPrincipal = formData.loanAmount / loanMonths;
        return this.calculateCostDataFixedPrincipal(formData, yearlyInterestRates, monthlyLoanPrincipal);
    }

}
