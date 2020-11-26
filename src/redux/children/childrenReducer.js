import { DECREASE_CHILDREN } from "./childrenTypes";
import { ADD_CHILDREN} from "./childrenTypes";


const initialState = {
  numOfChildren: 0,
};

const childrenReducer = (state = initialState, action) => {
  switch (action.type) {
    case DECREASE_CHILDREN:
      return {
        ...state,
        numOfChildren: state.numOfChildren - action.payload,
      };

    case ADD_CHILDREN:
      return {
        ...state,
        numOfChildren: state.numOfChildren + action.payload,
      };

    default:
      return state;
  }
};

export default childrenReducer;
