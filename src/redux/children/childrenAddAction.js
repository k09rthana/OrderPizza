import { ADD_CHILDREN } from './childrenTypes'

export const addChildren = (number = 1) => {
    return {
      type: ADD_CHILDREN ,
      payload: number
    }
  }