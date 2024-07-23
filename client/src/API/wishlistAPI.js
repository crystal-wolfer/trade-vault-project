import serverRequester from "./serverRequester.js";

const BASE_URL = "http://localhost:3030/jsonstore/coins";
const buildURL = (coinId) => `${BASE_URL}/${coinId}/wishlist}` 

const addToWishlist = async (coinId, userId) => serverRequester.post(buildURL(coinId), {userId});

const getWishlist = async (coinId) => {
  const result = await serverRequester.get(buildURL(coinId));
  const wishlist = Object.values(result);

  return wishlist
}

export default {
  addToWishlist,
  getWishlist
}