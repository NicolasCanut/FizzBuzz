export const FizzBuzzCalc = (n: number) => {
    let result = ""
    if(n % 3 === 0 || n.toString().includes('3')) result += 'Fizz'
    if(n % 5 === 0 || n.toString().includes('5')) result += 'Buzz'
    return result;
}