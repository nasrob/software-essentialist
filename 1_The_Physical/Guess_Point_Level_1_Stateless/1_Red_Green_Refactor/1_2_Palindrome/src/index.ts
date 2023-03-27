export class PalindromeChecker {
    getReversedString(str: string) {
        return str.split('').reverse().join('')
    }

    private stripSpaces(str: string) {
        return str.split(' ').join('')
    }

    isAPalindrome(str: string): boolean {
        const reversed = this.getReversedString(str);
        return this.stripSpaces(str).toLowerCase() === this.stripSpaces(reversed).toLowerCase();
    }
}