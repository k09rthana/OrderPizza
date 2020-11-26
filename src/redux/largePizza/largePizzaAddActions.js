import { ADD_LARGE_PIZZA} from './largePizzaTypes'

export const addLargePizza = (number = 1) => {
    return {
      type: ADD_LARGE_PIZZA,
      payload: number
    }
  }