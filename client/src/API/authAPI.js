import * as requester from "./serverRequester.js"

const BASE_URL = "http://localhost:3030/users"


export const register = async (data) => {
  try {
    const result = await requester.post(...data);
    return coins
  } catch (error) {
    return error.message
  }

}
