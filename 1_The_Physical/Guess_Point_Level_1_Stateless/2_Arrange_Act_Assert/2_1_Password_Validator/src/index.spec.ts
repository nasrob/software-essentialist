import { PasswordChecker, CheckedPasswordResponse } from './index';

describe('password validator', () => {
    describe('Cheking between 5 and 15 characters long', () => {
        it.each([
            ['mom1', false, ['InvalidLengthError']],
            ['james007', true, []],
            ['TaxiDeriver1973_Deniro', false, ['InvalidLengthError']]
        ])('knows that "%s" shoud return %s',
        (input: string, result: boolean, errors: string[]) => {
            let output = PasswordChecker.checkPassword(input)
    
            expect(output.result).toBe(result)
            expect(output.errors).toHaveLength(errors.length)
            expect(output.errors).toStrictEqual(errors)
        })
    })

    describe('Check for at least one digit', () => {
        it.each([
            ['NasDev3', true, []],
            ['NasDev', false, ['MissingDigitError']],
            ['maxwellTheBee', false, ['MissingDigitError']],
        ])('knows that "%s" should return %s',
        (input: string, result: boolean, errors: string[]) => {
            let output = PasswordChecker.checkPassword(input)

            expect(output.result).toBe(result)
            expect(output.errors).toHaveLength(errors.length)
            expect(output.errors).toStrictEqual(errors)
        })
    })
})
