/* converte a interface de uma classe em outra interface esperada pelos clientes. 
O Adapter permite que certas classes trabalhem em conjunto, 
pois de outra forma seria impossível por causa de suas interfaces incompatíveis. */

// import isEmail from 'validator/lib/isEmail'

const emailExpressionRegex: RegExp = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
function isEmail(value: string) {
    return emailExpressionRegex.test(value)
}

export interface EmailValidatorProtocol {
    isEmail(value: string): boolean;
}

export class EmailValidatorAdapter implements EmailValidatorProtocol {
    isEmail(value: string): boolean {
        return isEmail(value)
    }
}

function validateEmail(emailValidator: EmailValidatorProtocol, email: string): boolean {
    if (emailValidator.isEmail(email)) { return true }
    return false
}

const email = 'email@hosting.com'
const validator = new EmailValidatorAdapter()
console.log(validateEmail(validator, email))