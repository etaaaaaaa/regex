export class Validator {
    constructor(input) {
        this.input = input
    }

    validateUsername() {
        return (
            !/(\d){4}/g.test(this.input) &&              
            !/[а-яА-Яё]/gm.test(this.input) &&
            !/\W[\_\-]/gm.test(this.input) &&
            !/^(\-|\_|\d)|(\-|\_|\d)$/.test(this.input)
        )
    }
}