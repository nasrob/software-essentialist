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

    it('knows that "NasDev3" contain at least one digit', () => {
        let output = PasswordChecker.checkPassword('NasDev3')
        expect(output.result).toBeTruthy()
        expect(output.errors).toHaveLength(0)
    })

    it('knows that "NasDev" does not contain at least one digit', () => {
        let output = PasswordChecker.checkPassword('NasDev')
        expect(output.result).toBeFalsy()
        expect(output.errors).toHaveLength(1)
        expect(output.errors).toStrictEqual(['MissingDigitError'])
    })
})
