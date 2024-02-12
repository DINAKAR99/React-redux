import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";

function ItemContainer() {
  return (
    <div>
      <h2>items- {prop.item}</h2>
      <button onClick={props.buyItem}>buy items </button>
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.noOfCakes
    : state.iceCream.noOficecreams;

  return {
    item: itemState,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());

  return {
    buyItem: dispatchFunction,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
