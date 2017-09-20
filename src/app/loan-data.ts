export interface LoanFormDataInterface {
    loanAmount: number;
    loanYears: number;
    interestStart: number;
    interestEnd: number;
    margin: number;
}

export class LoanData {
    private formData: LoanFormDataInterface;
    private yearlyInterestRates: number[];

    public setFormData(data: LoanFormDataInterface) {
        this.formData = data;
        this.yearlyInterestRates = [];

        const step = (this.formData.interestEnd - this.formData.interestStart) / this.formData.loanYears;
        for (let i = 0; i < this.formData.loanYears; i++) {
            this.yearlyInterestRates.push(this.formData.interestStart + i * step);
        }
    }

    public graphsInitialized() {
        return this.formData !== undefined;
    }

    public getYearlyInterestRates() {
        return this.yearlyInterestRates;
    }
}
