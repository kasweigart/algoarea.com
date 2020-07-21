import React from "react";
import tsc from '../images/tsc.png'

const TimeAndSpaceComplexity = (props) => {
  return (
    <div>
      <h1 className="mb-3 font-weight-normal">Time & Space Complexity</h1>
      <h4>Time Complexity</h4>
      <p>
        Time complexitty is defined as the amount of time it will take an
        algorithm to execute being a function of its input length.
      </p>
      <h4>Space Complexity</h4>
      <p>
        Space complexity is defined as the amount of memory an alorithm will use
        in execution being a function of its input length.
      </p>
      <h4>O-Notation</h4>
      <p>A notation of a funciton's asymptotic upper bound.</p>
      <p>
        This notation is used over Ω-notation and Θ-notation because O-notation
        describes an algorithm's runtime in the worst case.
      </p>
      <p>
        Lower order terms of an O-notation are dismissed as these are usually
        deemed insignificant as a function's input increases.
      </p>
      <img src={tsc} alt="" style={{width: '60%'}}/>
    </div>
  );
};

export default TimeAndSpaceComplexity;
