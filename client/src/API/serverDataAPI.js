import * as requester from "./serverRequester.js"

const BASE_URL = "http://localhost:3030/jsonstore/coins"

export const getAll = async () => {
  try {
    const result = await requester.get(BASE_URL);
    const coins = Object.values(result);

    return coins  
  } catch (error) {
    return error.message
  }


}
