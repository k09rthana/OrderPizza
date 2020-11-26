import { BUY_LARGE_PIZZA } from './largePizzaTypes'

export const buyLargePizza = (number = 1) => {
  return {
    type: BUY_LARGE_PIZZA,
    payload: number
  }
}

