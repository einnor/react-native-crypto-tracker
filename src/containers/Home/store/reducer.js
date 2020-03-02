import {
  GET_COIN_DATA_REQUEST,
  GET_COIN_DATA_SUCESS,
  GET_COIN_DATA_FAILURE,
} from './actions';

export const initialState = {
  items: [],
  isLoading: false,
  hasError: false,
  error: null
};

export default function coinReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COIN_DATA_REQUEST:
      return {
        ...state,
        isLoading: false,
        isLoading: true,
      };
    case GET_COIN_DATA_SUCESS:
      return {
        ...state,
        items: action.payload.items,
        isLoading: false,
        hasError: false,
        error: null
      };
    case GET_COIN_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        error: action.payload.error
      };
  }
}