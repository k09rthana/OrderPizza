import { combineReducers } from "redux";
import smallPizzaReducer from "./smallPizza/smallPizzaReducer"
import mediumPizzaReducer from "./mediumPizza/mediumPizzaReducer";
import largePizzaReducer from "./largePizza/largePizzaReducer";
import adultsReducer from "./adults/AdultsReducer";
import childrenReducer from "./children/childrenReducer";


const rootReducer = combineReducers({
  smallPizza: smallPizzaReducer,
  mediumPizza: mediumPizzaReducer,
  largePizza: largePizzaReducer,
  adults: adultsReducer,
  children: childrenReducer,
});

export default rootReducer;
