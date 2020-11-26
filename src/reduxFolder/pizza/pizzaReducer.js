import { BUY_PIZZA } from './pizzaTypes'

const initialState = {
  numOfPizzas: 10
}

const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_PIZZA: return {
      ...state,
      numOfPizzas: state.numOfPizzas - action.payload
    }

    default: return state
  }
}

export default pizzaReducer
