import { BUY_SMALL_PIZZA } from "./smallPizzaTypes";
import { ADD_SMALL_PIZZA } from "./smallPizzaTypes";


const initialState = {
  numOfSmallPizzas: 0,
};

const smallPizzaReducer = (state = initialState, action) => {
  console.log("#########",state.numOfSmallPizzas)

  switch (action.type) {
    case BUY_SMALL_PIZZA:
      return {
        ...state,
        
        numOfSmallPizzas: state.numOfSmallPizzas - action.payload,
        
      };

    case ADD_SMALL_PIZZA:
      return {
        ...state,
        numOfSmallPizzas: state.numOfSmallPizzas + action.payload,
      };

    default:
      return state;
  }
};


export default smallPizzaReducer;
