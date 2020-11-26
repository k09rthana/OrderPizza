import { BUY_SMALL_PIZZA } from "./smallPizzaTypes"

export const buySmallPizza = (number = 1) => {
  return {
    type: BUY_SMALL_PIZZA,
    payload: number
  }
}

