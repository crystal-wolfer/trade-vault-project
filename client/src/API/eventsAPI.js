import * as requester from "./serverRequester.js";
const BASE_URL = "http://localhost:3030/jsonstore/events";


export const getEvents = async () => {
  try {
    const result = await requester.get(BASE_URL);
    const data = Object.values(result);

    console.log(data);
    
    return data;
  } catch (error) {
    return error.message;
  }
};
