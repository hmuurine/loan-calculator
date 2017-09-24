import { LoanFormDataInterface } from "./loan-form-data-interface";
import { LoanInterestDataInterface } from "./loan-interest-data-interface";
import { LoanPaymentDataInterface } from "./loan-payment-data-interface";
import { LoanType } from "./loan-type-enum";

export class LoanData {
    public formData: LoanFormDataInterface;
    public interestData: LoanInterestDataInterface;
    public yearlyInterestRates: number[];
    public paymentData: LoanPaymentDataInterface;

    constructor() {
        // default initial values:
        this.formData = {
            loanAmount: 200000,
            loanYears: 15,
            loanType: LoanType.EqualAmortization,
            interestAdjustementPeriod: 12,
            margin: 1
        };
        this.interestData = {
            interestStart: 1,
            interestEnd: 5
        };
        this.yearlyInterestRates = [];
    }

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
