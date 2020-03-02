import {
  GET_COIN_DATA_REQUEST,
  GET_COIN_DATA_SUCESS,
  GET_COIN_DATA_FAILURE,
} from './actions';

export const initialState = {
  coins: [],
  isLoading: false,
  error: null
};

export default function coinReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COIN_DATA_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case GET_COIN_DATA_SUCESS:
      return {
        ...state,
        coins: action.payload.coins,
        isLoading: false,
        error: null
      };
    case GET_COIN_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
  }
}