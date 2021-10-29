function asFizzBuzz(number: number): number | string {
  let result;
  if (number % 15 === 0) {
    result = "FizzBuzz";
  } else if (number % 5 === 0) {
    result = "Buzz";
  } else if (number % 3 === 0) {
    result = "Fizz";
  } else {
    result = number;
  }
  return result;
}

export default asFizzBuzz;
