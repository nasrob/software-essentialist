import { PasswordChecker, CheckedPasswordResponse } from './index';

describe('password validator', () => {
    it('returns an invalid length error for strings less than 5 charchters', () => {
        // arrange
        let response: CheckedPasswordResponse

        // act
        response = PasswordChecker.checkPassword('mom') 

        // assert
        expect(response.result).toBeFalsy()
        expect(response.errors.length).toEqual(1)
        expect(response.errors.length).toBeGreaterThanOrEqual(1)
        expect(response.errors[0]).toEqual('InvalidLengthError')
    })

    it('returns an invalid length error for strings longer than 15 charchters', () => {
        // arrange
        let response: CheckedPasswordResponse

        // act
        response = PasswordChecker.checkPassword('PLHbyFovVcUeccKV')

        // assert
        expect(response.result).toBeFalsy()
        expect(response.errors.length).toEqual(1)
        expect(response.errors.length).toBeGreaterThanOrEqual(1)
        expect(response.errors[0]).toEqual('InvalidLengthError')
    })

    it('returns a valid response for strings between 5 and 15 charcters long', () => {
        // arrange
        let response: CheckedPasswordResponse

        // act
        response = PasswordChecker.checkPassword('James007')

        // assert
        expect(response.result).toBeTruthy()
        expect(response.errors).toHaveLength(0)
    })
})
