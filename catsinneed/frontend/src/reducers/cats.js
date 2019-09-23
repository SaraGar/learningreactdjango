import { GET_CATS, DELETE_CAT, ADD_CAT, CLEAR_CATS, GET_ALL_CATS } from "../actions/types.js";

const initialState = {
  cats: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CATS:
      return {
        ...state,
        cats: action.payload
      };
    case GET_ALL_CATS:
      return {
        ...state,
        cats: action.payload
      };
    case DELETE_CAT:
      return {
        ...state,
        cats: state.cats.filter(cat => cat.id !== action.payload)
      };
    case ADD_CAT:
      return {
        ...state,
        cats: [...state.cats, action.payload]
      };
    case CLEAR_CATS:
      return {
        ...state,
        cats: []
      };
    default:
      return state;
  }
}
