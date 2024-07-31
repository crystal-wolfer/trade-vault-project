import { useReducer, useCallback } from "react";
import * as serverDataAPI from "../../src/API/serverDataAPI.js";

const FETCH_COINS_START = 'FETCH_COINS_START';
const FETCH_COINS_SUCCESS = 'FETCH_COINS_SUCCESS';
const FETCH_COINS_FAILURE = 'FETCH_COINS_FAILURE';

const initialState = {
  coins: [],
  loading: false,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case FETCH_COINS_START:
      return { ...state, loading: true, error: null };
    case FETCH_COINS_SUCCESS:
      return { ...state, coins: action.payload, loading: false };
    case FETCH_COINS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export function useCoinData(ownerId) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchCoins = useCallback(async () => {
    dispatch({ type: FETCH_COINS_START });
    try {
      const coins = await serverDataAPI.getMyCoins(ownerId);
      dispatch({ type: FETCH_COINS_SUCCESS, payload: coins });
    } catch (error) {
      dispatch({ type: FETCH_COINS_FAILURE, payload: error.message });
    }
  }, [ownerId]);

  return [state, fetchCoins];
}
