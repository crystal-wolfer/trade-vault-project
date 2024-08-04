import * as requester from "./serverRequester.js";
const BASE_URL = "http://localhost:3030/jsonstore/events";


export const getEvents = async () => {
  try {
    const result = await requester.get(BASE_URL);
    const data = Object.values(result);

    return data;
  } catch (error) {
    return error.message;
  }
};

export const getEventById = async (id) => {
  
   try {
    const result = await requester.get(`http://localhost:3030/jsonstore/events/${id}`);
    
    console.log(result);
    
    return result;
  } catch (error) {
    return error.message;
  }
};
