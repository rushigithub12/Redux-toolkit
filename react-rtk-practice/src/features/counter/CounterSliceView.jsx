import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";

export const CounterSliceView = () => {
  const [inputVal, setInputVal] = React.useState(10);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Counter slice -{count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(incrementByAmount(inputVal))}>
        incrementByAmt
      </button>
    </div>
  );
};
