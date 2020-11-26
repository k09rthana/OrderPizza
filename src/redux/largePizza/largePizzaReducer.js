import { BUY_LARGE_PIZZA } from "./largePizzaTypes";
import { ADD_LARGE_PIZZA } from "./largePizzaTypes";


const initialState = {
  numOfLargePizzas: 0,
};

const largePizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_LARGE_PIZZA:
      return {
        ...state,
        numOfLargePizzas: state.numOfLargePizzas - action.payload,
      };

    case ADD_LARGE_PIZZA:
      return {
        ...state,
        numOfLargePizzas: state.numOfLargePizzas + action.payload,
      };

    default:
      return state;
  }
};

export default largePizzaReducer;
