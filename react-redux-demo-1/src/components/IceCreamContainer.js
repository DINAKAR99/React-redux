import React from "react";
import { buyIceCream } from "../redux";
import { connect } from "react-redux";

function IceCreamContainer(props) {
  return (
    <div>
      <h2>no of icecreams {props.noOfIcrecreams}</h2>
      <button onClick={buyIceCream}>click to buy</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    noOfIcrecreams: state.iceCream.noOfIcrecreams,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
