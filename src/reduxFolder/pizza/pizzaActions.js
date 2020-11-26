import { BUY_PIZZA } from './pizzaTypes'

export const buyPizza = (number = 1) => {
  return {
    type: BUY_PIZZA,
    payload: number
  }
}
