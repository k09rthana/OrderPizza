import { BUY_MEDIUM_PIZZA } from "./mediumPizzaTypes";
import { ADD_MEDIUM_PIZZA} from "./mediumPizzaTypes";


const initialState = {
  numOfMediumPizzas: 1,
};

const mediumPizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_MEDIUM_PIZZA:
      return {
        ...state,
        numOfMediumPizzas: state.numOfMediumPizzas - action.payload,
      };

    case ADD_MEDIUM_PIZZA:
      return {
        ...state,
        numOfMediumPizzas: state.numOfMediumPizzas + action.payload,
      };

    default:
      return state;
  }
};

export default mediumPizzaReducer;
