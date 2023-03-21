export function fizzBuzz(number:number) {
    const isMultipleOfFive = number % 5 === 0
    const isMultipleOfThree = number % 3 === 0

    if (isMultipleOfThree && isMultipleOfFive) return 'FizzBuzz'
    if (isMultipleOfThree) return 'Fizz'
    if (isMultipleOfFive) return 'Buzz'

    return number.toString()
}