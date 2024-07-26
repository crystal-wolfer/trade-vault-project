export default async function serverRequester(method, url, data) {
  const OPTIONS = {};

  if (method !== "GET") {
    OPTIONS.method = method;
  }

  if (data) {
    OPTIONS.headers = {
      "Content-Type": "application/json",
    };

    OPTIONS.body = JSON.stringify(data);
  }

  // const userData = localService.getItem("userData");
  // if (userData) {
  //   token = userData.accessToken;
  // }

  // if (token) {
  //   OPTIONS.headers = {
  //     ...OPTIONS.headers,
  //     "X-Authorization": token,
  //   };
  // }

  try {
    const response = await fetch(url, OPTIONS);
  
    if (response.status === 409){
      return {
        status: 409,
        message:"Тhis email already exists"
        }
    }

    if (response.status === 403 || response.status === 401){
      return {
        status: response.status,
        message: "Email or password incorrect"
      };
    }
    
    const result = await response.json();

    return result;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error.message);
    throw error.message;
  }
}

export const get = serverRequester.bind(null, "GET");
export const post = serverRequester.bind(null, "POST");
export const put = serverRequester.bind(null, "PUT");
export const del = serverRequester.bind(null, "DELETE");
