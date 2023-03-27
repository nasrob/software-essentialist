import { PalindromeChecker } from './index';

describe('palindrome checker', () => {
    it('class exists', () => {
        let palindromeChecker = new PalindromeChecker();
        expect(palindromeChecker).toBeDefined();
    })

    it('should be able to tell that "mom" is a palindrome', () => {
        let palindromeChecker = new PalindromeChecker();
        expect(palindromeChecker.isAPalindrome('mom')).toBeTruthy();
    })
})