import { ADD_ADULT } from './AdultsTypes'

export const addAdult = (number = 1) => {
    return {
      type: ADD_ADULT ,
      payload: number
    }
  }