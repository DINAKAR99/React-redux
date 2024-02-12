import React, { useState } from "react";
import { buyCake } from "../redux";

function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <input
        type="text"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <h2>num of cakes - </h2>
      <button onClick={props.buyCake(number)}>buy cake </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};
const mapDispatchToProps = (state) => {
  return {
    buycake: (number) => dispatch(buyCake(number)),
  };
};
export default NewCakeContainer;
