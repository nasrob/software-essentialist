export class PalindromeChecker {
    isAPalindrome(str: string): boolean {
        const reversed = str.split('').reverse().join('');
        return str.toLowerCase().split(' ').join('') === reversed.toLowerCase().split(' ').join('');
    }
}