import { DECREASE_ADULT } from "./AdultsTypes";
import { ADD_ADULT} from "./AdultsTypes";


const initialState = {
  numOfAdults: 1,
};

const AdultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DECREASE_ADULT:
      
      return {
        ...state,
        
        numOfAdults: state.numOfAdults - action.payload,
      };

    case ADD_ADULT:
      return {
        ...state,
        numOfAdults: state.numOfAdults + action.payload,
      };

    default:
      return state;
  }
};

export default AdultsReducer;
