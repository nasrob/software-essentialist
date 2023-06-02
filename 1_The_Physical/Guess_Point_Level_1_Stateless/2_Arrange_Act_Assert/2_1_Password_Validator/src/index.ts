type PasswordError = 'InvalidLengthError' | 'MissingDigitError'

export type CheckedPasswordResponse = {
    result: boolean,
    errors: PasswordError[]
}

export class PasswordChecker {
    public static checkPassword(password: string): CheckedPasswordResponse {
        let errors: PasswordError[] = []

        let isBetweenFiveAndFifteen = password.length >= 5 && password.length <= 15
        let passwordHasDigits = password.split('').find(char => !isNaN(Number(char))) !== undefined

        if (!isBetweenFiveAndFifteen) errors.push('InvalidLengthError')
        if (!passwordHasDigits) errors.push('MissingDigitError')

        return {
            result: errors.length === 0,
            errors
        }
    }
}