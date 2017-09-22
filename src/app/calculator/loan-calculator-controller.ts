import { LoanFormDataInterface } from "../model/loan-form-data-interface";
import { LoanPaymentDataInterface } from "../model/loan-payment-data-interface";
import { LoanCalculator } from "./loan-calculator";
import { LoanCalculatorEqualAmortization } from "./loan-calculator-equal-amortization";
import { LoanCalculatorBullet } from "./loan-calculator-bullet";
import { LoanType } from "../model/loan-type-enum";
import { LoanData } from "../model/loan-data";

export class LoanCalculatorController {
    private loanData: LoanData;

    private loanDataCalculator: LoanCalculator;

    constructor() {
        this.loanData = new LoanData();
    }

    /**
     * Returns formData.
     */
    public getFormData() {
        return this.loanData.formData;
    }

    /**
     * Sets loan basic information, and calculates initial interest rates
     * based on the input.
     *
     * @param data
     */
    public setFormData(data: LoanFormDataInterface) {
        this.loanData.yearlyInterestRates = this.computeInitialInterestRates(data.interestStart, data.interestEnd, data.loanYears);
        this.loanData.formData = data;
        this.loanDataCalculator = this.selectLoanDataCalculator(this.loanData.formData.loanType);
        this.updateCostData();
    }

    /**
     * Is data needed by the graph initialized?
     */
    public graphsInitialized() {
        return this.loanData.formData !== undefined;
    }

    /**
     * Returns loan data object
     */
    public getLoanData() {
        return this.loanData;
    }


    /**
     * Sets interest rate for year idx.
     * 
     * @param idx 
     * @param value 
     */
    public setYearlyInterestRate(idx: number, value: number) {
        if (idx >= 0 && idx < this.loanData.yearlyInterestRates.length) {
            let clone = this.loanData.yearlyInterestRates.slice();
            clone[idx] = value;
            this.loanData.yearlyInterestRates = clone;
            this.updateCostData();
        } else {
            throw Error("invalid idx");
        }
    }

    /**
     * Generates a linearily increasing interest curve. Generates loanYears + 1 values because loan payment
     * is going to continue until final day of December and we assume that interest can change even
     * during the last year.
     * 
     * @param interestStart 
     * @param interestEnd 
     * @param loanYears 
     */
    private computeInitialInterestRates(interestStart: number, interestEnd: number, loanYears: number) {
        let rates: number[] = [];
        const step = (interestEnd - interestStart) / loanYears;
        for (let i = 0; i <= loanYears; i++) {
            rates.push(interestStart + i * step);
        }
        return rates;
    }

    /**
     * Returns loan calculator object based on given type.
     * 
     * @param type 
     */
    private selectLoanDataCalculator(type: LoanType) {
        switch (Number(type)) {
            case LoanType.EqualAmortization:
                return new LoanCalculatorEqualAmortization();
            case LoanType.Bullet:
                return new LoanCalculatorBullet();
        }
        throw Error("invalid loan type");
    }

    /**
     * Calculates all cost data based on loan size, margin and interest rates.
     * Updates model values.
     */
    private updateCostData() {
        this.loanData.paymentData = this.loanDataCalculator.calculateCostData(this.loanData.formData, this.loanData.yearlyInterestRates);
    }

}
