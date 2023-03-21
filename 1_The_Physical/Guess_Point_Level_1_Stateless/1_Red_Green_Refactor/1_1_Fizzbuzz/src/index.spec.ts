import { fizzBuzz } from ".";

describe("fizzbuzz", () => {

    it('returns a string', () => {
        expect(typeof fizzBuzz(11)).toBe('string')
    })

    it('returns Fizz for 3', () => {
        expect(fizzBuzz(3)).toEqual('Fizz')
    })

    it('returns Buzz for 5', () => {
        expect(fizzBuzz(5)).toEqual('Buzz')
    })

    it('returns FizzBuzz for 3 and 5', () => {
        expect(fizzBuzz(45)).toEqual('FizzBuzz')
    })


    it('returns 11 as a string', () => {
        expect(fizzBuzz(11)).toEqual('11')
    })

});
