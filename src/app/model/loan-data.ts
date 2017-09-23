import { LoanFormDataInterface } from "./loan-form-data-interface";
import { LoanPaymentDataInterface } from "./loan-payment-data-interface";

export class LoanData {
    public formData: LoanFormDataInterface;
    public yearlyInterestRates: number[];
    public paymentData: LoanPaymentDataInterface;

    /**
     * Total cumulative costs at the end of loan period
     */
    public getTotalCosts() {
        let cumulArray = this.paymentData.cumulativeTotal;
        return cumulArray && cumulArray.length > 0 ? (cumulArray[cumulArray.length - 1]).toFixed(2) : "";
    }

    /**
     * Total cumulative interest at the end of loan period
     */
    public getTotalInterest() {
        let cumulArray = this.paymentData.cumulativeInterest;
        return cumulArray && cumulArray.length > 0 ? (cumulArray[cumulArray.length - 1]).toFixed(2) : "";
    }

}
