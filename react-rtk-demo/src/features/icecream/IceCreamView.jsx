import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

export const IceCreamView = () => {
  const numOfIceCream = useSelector((state) => state.icecream.numberOfIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of IceCreams-{numOfIceCream} </h2>
      <button onClick={() => dispatch(ordered())}>Order Ice-cream</button>
      <button onClick={() => dispatch(restocked(3))}>Restock Ice-cream</button>
    </div>
  );
};
