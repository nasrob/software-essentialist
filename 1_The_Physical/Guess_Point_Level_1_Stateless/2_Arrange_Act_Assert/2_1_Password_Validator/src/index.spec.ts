import { PasswordChecker } from './index';

describe('password validator', () => {
    it('returns an invalid length error for strings less than 5 charchters', () => {
        // arrange

        // act
        const response = PasswordChecker.checkPassword('mom') 

        // assert
        expect(response.result).toBeFalsy()
        expect(response.errors.length).toEqual(1)
        expect(response.errors[0]).toEqual('InvalidLengthError')
    })
})
