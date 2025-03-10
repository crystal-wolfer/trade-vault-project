import * as requester from "./serverRequester.js";

//const BASE_URL = "http://localhost:3030/data/coins";
const BASE_URL = `${import.meta.env.VITE_API_URL}/data/coins`;
//const WISH_URL = "http://localhost:3030/data/wishlist"
const WISH_URL = `${import.meta.env.VITE_API_URL}/data/wishlist`

export const getAll = async () => {
  try {
    const result = await requester.get(BASE_URL);
    const coins = Object.values(result);

    return coins;
  } catch (error) {
    return error.message;
  }
};

export const create = async (data) => {
  try {
    const result = await requester.post(BASE_URL, data);
    return result;
  } catch (error) {
    return error.message;
  }
};

export const getMyCoins = async (ownerId) => {
  try {
    const result = await requester.get(
      `${import.meta.env.VITE_API_URL}/data/coins?where=_ownerId%3D%22${ownerId}%22`
    );
    const coins = Object.values(result);

    return coins;
  } catch (error) {
    return error.message;
  }
};

export const editCoin = async (coinId, data) => {
  try {
    const result = await requester.patch(`${BASE_URL}/${coinId}`, data);

    return result;
  } catch (error) {
    return error.message;
  }
};

export const deleteCoin = async (coinId) => {
  try {
    const result = await requester.del(`${BASE_URL}/${coinId}`);

    return result;
  } catch (error) {
    return error.message;
  }
};

export const getMyWishList = async (ownerId) => {
  try {
    const result = await requester.get(
      `${import.meta.env.VITE_API_URL}/data/wishlist?where=_ownerId%3D%22${ownerId}%22`
    );
    const list = Object.values(result);
    return list;
    
  } catch (error) {
    return error.message;
  }

};

export const addToWishList = async (data) => {
   try {
    const result = await requester.post(`${import.meta.env.VITE_API_URL}/data/wishlist`, data);
    return result;
  } catch (error) {
    return error.message;
  }
}

export const removeFromWishList = async (id) => {
    try {
    const result = await requester.del(`${WISH_URL}/${id}`);

    return result;
  } catch (error) {
    return error.message;
  }
};