import { PalindromeChecker } from './index';

describe('palindrome checker', () => {
    let palindromeChecker: PalindromeChecker;

    beforeEach(() => {
        palindromeChecker = new PalindromeChecker();
    })

    it('class exists', () => {
        expect(palindromeChecker).toBeDefined();
    })

    it('should be able to tell that "mom" is a palindrome', () => {
        expect(palindromeChecker.isAPalindrome('mom')).toBeTruthy();
    })

    it('should be able to tell that "bill" is not a palindrome', () => {
        expect(palindromeChecker.isAPalindrome('bill')).toBeFalsy();
    })

    it('should check plaindrome even case not matching', () => {
        expect(palindromeChecker.isAPalindrome('Mom')).toBeTruthy();
    })

    it('should be able to tell that "Was It A Rat I Saw" sentence is a plaindrome', () => {
        expect(palindromeChecker.isAPalindrome('Was It A Rat I Saw')).toBeTruthy();
    })

    it('should be able to tell that "Never Odd or Even" sentence is a plaindrome', () => {
        expect(palindromeChecker.isAPalindrome('Never Odd or Even')).toBeTruthy();
    })
})