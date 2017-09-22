import { LoanType } from "./loan-type-enum";
export interface LoanFormDataInterface {
    loanAmount: number;
    loanYears: number;
    loanType: LoanType;
    interestAdjustementPeriod: number;
    interestStart: number;
    interestEnd: number;
    margin: number;
}
