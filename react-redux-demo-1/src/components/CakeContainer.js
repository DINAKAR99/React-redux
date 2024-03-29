import React from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";

export const CakeContainer = ({ props }) => {
  return (
    <div>
      <h2>no of cakes {props.noOfCakes}</h2>
      <button onClick={props.buyCake}>buy cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
