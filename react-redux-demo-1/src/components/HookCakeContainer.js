import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux";

function HookCakeContainer() {
  const noOfCakes = useSelector((state) => state.noOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>no of cakes{noOfCakes} </h2>
      <button onClick={() => dispatch(buyCake)}>buy cake </button>
    </div>
  );
}

export default HookCakeContainer;
