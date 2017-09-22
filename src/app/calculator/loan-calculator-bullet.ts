import { LoanFormDataInterface } from "../model/loan-form-data-interface";
import { LoanPaymentDataInterface } from "../model/loan-payment-data-interface";
import { LoanCalculator } from "./loan-calculator";

export class LoanCalculatorBullet extends LoanCalculator {

    /**
     * Calculates all cost data based on loan size, margin and interest rates.
     * Returns yearly payment values and cumulative values. Bullet loan principal is paid
     * back at the end of loan period. Before that only interest is paid.
     */
    public calculateCostData(formData: LoanFormDataInterface, yearlyInterestRates: number[]): LoanPaymentDataInterface {
        return this.calculateCostDataFixedPrincipal(formData, yearlyInterestRates, 0);
    }

}
