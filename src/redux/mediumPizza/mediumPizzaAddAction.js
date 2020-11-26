import { ADD_MEDIUM_PIZZA } from './mediumPizzaTypes'

export const addMediumPizza = (number = 1) => {
    return {
      type: ADD_MEDIUM_PIZZA ,
      payload: number
    }
  }