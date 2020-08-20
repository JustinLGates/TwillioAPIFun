import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from "./Slice";

export function ExampleComp() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <div className="row">
      <div className="col-12 text-center text-dark p-3">
        <h1>Redux Store Example </h1>
      </div>
      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-8 d-flex justify-content-center m-auto">
        <button
          className="btn btn-primary m-2 p-2 w-100"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          <h1>+</h1>
        </button>
        <div className="d-flex align-items-center justify-content-center w-100">
          <h2 className="p-0 m-0 px-2">{count}</h2>
        </div>
        <button
          className="btn btn-danger p-2 m-2 w-100"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          <h1> -</h1>
        </button>
      </div>
      <div className="col-12 text-center">
        <input
          className="p-2 m-2"
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <br />
        <button
          className="btn btn-primary p-2 m-2"
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          className="btn btn-primary p-2 m-2"
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
      </div>
    </div>
  );
}
