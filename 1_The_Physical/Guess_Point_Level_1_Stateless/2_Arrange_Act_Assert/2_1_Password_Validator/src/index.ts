type PasswordError = 'InvalidLengthError'

export type CheckedPasswordResponse = {
    result: boolean,
    errors: PasswordError[]
}

export class PasswordChecker {
    public static checkPassword(password: string): CheckedPasswordResponse {
        let errors: PasswordError[] = []

        let isBetweenFiveAndFifteen = password.length >= 5 && password.length <= 15

        if (!isBetweenFiveAndFifteen) errors.push('InvalidLengthError')

        return {
            result: errors.length === 0,
            errors
        }
    }
}