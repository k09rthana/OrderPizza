import { BUY_MEDIUM_PIZZA } from './mediumPizzaTypes'
// import { ADD_CAKE } from './cakeTypes'

export const buyMediumPizza = (number = 1) => {
  return {
    type: BUY_MEDIUM_PIZZA,
    payload: number
  }
}

// export const addCake = (number = 1) => {
//   return {
//     type: ADD_CAKE,
//     payload: number
//   }
// }