import {
  GET_COINS_REQUEST,
  GET_COINS_SUCESS,
  GET_COINS_FAILURE,
} from './actions';

export const initialState = {
  items: [],
  isLoading: false,
  hasError: false,
  error: null
};

export default function coinReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COINS_REQUEST:
      return {
        ...state,
        isLoading: false,
        isLoading: true,
      };
    case GET_COINS_SUCESS:
      return {
        ...state,
        items: action.payload.items,
        isLoading: false,
        hasError: false,
        error: null
      };
    case GET_COINS_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        error: action.payload.error
      };
    default:
      return state;
  }
}