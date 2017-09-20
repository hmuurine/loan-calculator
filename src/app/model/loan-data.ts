import { LoanFormDataInterface } from "../common/loan-form-data-interface";

export class LoanData {
    private formData: LoanFormDataInterface;
    private yearlyInterestRates: number[];
    private monthlyPayment: number[];
    private monthlyInterest: number[];
    private cumulativeTotal: number[];
    private cumulativeInterest: number[];

    /**
     * Returns formData.
     */
    public getFormData() {
        return this.formData;
    }

    /**
     * Sets loan basic information, and calculates initial interest rates
     * based on the input.
     *
     * @param data
     */
    public setFormData(data: LoanFormDataInterface) {
        this.yearlyInterestRates = this.computeInitialInterestRates(data.interestStart, data.interestEnd, data.loanYears);
        this.formData = data;
        this.updateCostData();
    }

    /**
     * Is data needed by the graph initialized?
     */
    public graphsInitialized() {
        return this.formData !== undefined;
    }

    /**
     * Return interest rates.
     */
    public getYearlyInterestRates() {
        return this.yearlyInterestRates;
    }

    /**
     * Return total payment €/month at the start of each year.
     */
    public getMonthlyPayment() {
        return this.monthlyPayment;
    }

    /**
     * Return interest part of €/month payment as the start of each year.
     */
    public getMonthlyInterest() {
        return this.monthlyInterest;
    }

    /**
     * Returns cumulative total payments at the start of each year.
     */
    public getCumulativeTotal() {
        return this.cumulativeTotal;
    }

    /**
     * Returns cumulaitve total interest payment at the start of each year.
     */
    public getCumulativeInterest() {
        return this.cumulativeInterest;
    }

    /**
     * Sets interest rate for year idx.
     * 
     * @param idx 
     * @param value 
     */
    public setYearlyInterestRate(idx: number, value: number) {
        if (idx >= 0 && idx < this.yearlyInterestRates.length) {
            let clone = this.yearlyInterestRates.slice();
            clone[idx] = value;
            this.yearlyInterestRates = clone;
            this.updateCostData();
        } else {
            throw Error("invalid idx");
        }
    }

    /**
     * Generates a linearily increasing interest curve.
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
     * Calculates all cost data based on loan size, margin and interest rates.
     * Updates model values.
     */
    private updateCostData() {
        let monthlyPayment: number[] = [];
        let monthlyInterest: number[] = [];
        let cumulativeTotal: number[] = [];
        let cumulativeInterest: number[] = [];

        let loanRemaining = this.formData.loanAmount;
        let loanMonths = this.formData.loanYears * 12;
        let monthlyLoanPayment = this.formData.loanAmount / loanMonths;
        let cumulTotalEur = 0;
        let cumulTotalInterestEur = 0;

        // first pass: calculate interests in the beginning of each year
        for (let i = 0; i <= this.formData.loanYears; i++) {
            let interestPct = this.formData.margin + this.yearlyInterestRates[i];
            let interestEur = loanRemaining * interestPct / 100.0 / 12.0;
            let paymentEur = i < this.formData.loanYears ? monthlyLoanPayment : 0; // loan already paid at the beginning of last year

            monthlyInterest.push(interestEur);
            monthlyPayment.push(paymentEur);

            loanRemaining -= monthlyLoanPayment * 12;
        }

        // second pass: calculate total yearly payments using the averages of
        // current year and next year start payments
        cumulativeInterest.push(cumulTotalInterestEur);
        cumulativeTotal.push(cumulTotalEur);
        for (let i = 1; i <= this.formData.loanYears; i++) {
            let yearlyInterestEur = (monthlyInterest[i] + monthlyInterest[i - 1]) / 2 * 12;
            cumulTotalInterestEur += yearlyInterestEur;
            cumulTotalEur += yearlyInterestEur + monthlyLoanPayment * 12;
            cumulativeInterest.push(cumulTotalInterestEur);
            cumulativeTotal.push(cumulTotalEur);
        }

        this.monthlyPayment = monthlyPayment;
        this.monthlyInterest = monthlyInterest;
        this.cumulativeTotal = cumulativeTotal;
        this.cumulativeInterest = cumulativeInterest;
    }

}
