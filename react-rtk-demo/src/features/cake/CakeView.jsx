import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

export const CakeView = () => {
  const numOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(1);
  return (
    <div>
      <h2>Number of cakes -{numOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order cakes</button>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>Restock cakes</button>
    </div>
  );
};
