// Action Types
export const GET_COIN_DATA_REQUEST = 'GET_COIN_DATA_REQUEST';
export const GET_COIN_DATA_SUCESS = 'GET_COIN_DATA_SUCESS';
export const GET_COIN_DATA_FAILURE = 'GET_COIN_DATA_FAILURE';

// Actions
export function getCoinDataRequest() {
  return {
    type: GET_COIN_DATA_REQUEST
  };
}

export function getCoinDataSuccess(items) {
  return {
    type: GET_COIN_DATA_SUCESS,
    payload: { items }
  };
}

export function getCoinDataFailure(error) {
  return {
    type: GET_COIN_DATA_FAILURE,
    payload: { error }
  };
}
