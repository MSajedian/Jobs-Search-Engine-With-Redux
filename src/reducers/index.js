import { initialState } from '../store'

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_JOB_TO_FAVOURITE':
      return {
        ...state,
        favouriteJobs: [...state.favouriteJobs, action.payload], // THIS IS VALID
      }

    // case 'REMOVE_ITEM_FROM_CART':
    //   let newProducts = state.cart.products.filter((book, i) => i !== action.payload)
    //   return {
    //     ...state,
    //     cart: {
    //       ...state.cart,
    //       products: newProducts,
    //     },
    //   }

    // case 'SET_USERNAME':
    //   return {
    //     ...state, // carrying over the cart, I don't want to lose it
    //     user: {
    //       ...state.user,
    //       firstName: action.payload,
    //     },
    //   }

    default:
      return state
  }
}

export default mainReducer
