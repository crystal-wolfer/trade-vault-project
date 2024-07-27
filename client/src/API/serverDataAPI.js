import * as requester from "./serverRequester.js"

const BASE_URL = "http://localhost:3030/data/coins"

export const getAll = async () => {
  try {
    const result = await requester.get(BASE_URL);
    const coins = Object.values(result);

    return coins  
  } catch (error) {
    return error.message
  }


}

export const create = async (data) => {
  try {
    const result = await requester.post(BASE_URL, data);
    return result
    
  } catch (error) {
    return error.message
  }
}