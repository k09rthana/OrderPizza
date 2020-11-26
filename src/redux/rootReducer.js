import { combineReducers } from "redux";
import smallPizzaReducer from "./smallPizza/smallPizzaReducer"
import mediumPizzaReducer from "./mediumPizza/mediumPizzaReducer";
import largePizzaReducer from "./largePizza/largePizzaReducer";
import adultsReducer from "./adults/AdultsReducer";
import childrenReducer from "./children/childrenReducer";

import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  smallPizza: smallPizzaReducer,
  user: userReducer,
  mediumPizza: mediumPizzaReducer,
  largePizza: largePizzaReducer,
  adults: adultsReducer,
  children: childrenReducer,
});

export default rootReducer;
