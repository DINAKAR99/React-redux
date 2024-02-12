import { BUY_ICECREAM } from "./IceCreamTypes";

const initialState = {
  noOfIcecreams: 10,
};

const IceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM: {
      return {
        ...state,
        noOfIcecreams: state.noOfIcecreams - 1,
      };
    }
    default:
      return state;
  }
};

export default IceCreamReducer;
