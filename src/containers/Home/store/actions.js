// Action Types
export const GET_COINS_REQUEST = 'GET_COINS_REQUEST';
export const GET_COINS_SUCESS = 'GET_COINS_SUCESS';
export const GET_COINS_FAILURE = 'GET_COINS_FAILURE';

// Actions
export function getCoinsRequest() {
  return {
    type: GET_COINS_REQUEST
  };
}

export function getCoinsSuccess(items) {
  return {
    type: GET_COINS_SUCESS,
    payload: { items }
  };
}

export function getCoinsFailure(error) {
  return {
    type: GET_COINS_FAILURE,
    payload: { error }
  };
}
