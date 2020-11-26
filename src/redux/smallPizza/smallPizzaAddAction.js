import { ADD_SMALL_PIZZA } from "./smallPizzaTypes"

export const addSmallPizza = (number = 1) => {
    return {
      type: ADD_SMALL_PIZZA,
      payload: number
    }
  }