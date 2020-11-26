import { DECREASE_CHILDREN } from './childrenTypes'

export const decreaseChildren = (number = 1) => {
  return {
    type: DECREASE_CHILDREN,
    payload: number
  }
}

