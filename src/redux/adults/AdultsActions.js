import { DECREASE_ADULT } from './AdultsTypes'
// import { ADD_CAKE } from './cakeTypes'

export const decreaseAdult = (number = 1) => {
  return {
    type: DECREASE_ADULT,
    payload: number
  }
}

// export const addCake = (number = 1) => {
//   return {
//     type: ADD_CAKE,
//     payload: number
//   }
// }