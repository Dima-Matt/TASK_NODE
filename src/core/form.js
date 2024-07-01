export class Form {
    constructor(form, controls) {
        this.form = form;
        this.controls = controls;
    }

    value() {
        const value = {};
        Object.keys(this.controls).forEach(field => {
            value[field] = this.form[field].value;
        });

        return value;
    }

    isValid() {
        let isFormValid = true;

        Object.keys(this.controls).forEach((field) => {
            const validatorsFns = this.controls[field];
            let isValid = true;
            validatorsFns.forEach((validator) => {
                isValid = validator(this.form[field].value) && isValid;
            });

            isValid ? console.log('ok') : console.log('no');

            isFormValid = isValid && isFormValid;
        });

        return isFormValid;
    }
}