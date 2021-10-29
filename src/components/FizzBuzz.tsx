import React, { useState } from "react";
import asFizzBuzz from "../utils/asFizzBuzz";

function FizzBuzz(): JSX.Element {
  const [num, setNum] = useState<number>(1);
  const [oldNums, setOldNums] = useState<(number | string)[]>([]);

  const handleNextFizzBuzz = () => {
    setNum(num + 1);
    setOldNums([...oldNums, asFizzBuzz(num)]);
  };

  return (
    <>
      <h1>FizzBuzz app!</h1>
      <p>FizzBuzz output: {oldNums.join(", ")}</p>
      <button onClick={handleNextFizzBuzz}>Next</button>
    </>
  );
}

export default FizzBuzz;
