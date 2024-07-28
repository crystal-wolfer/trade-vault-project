export default async function serverRequester(method, url, data) {
  const OPTIONS = {
    headers: { "Content-Type": "application/json" },
  };

  const userData = JSON.parse(localStorage.getItem("user"));
  if (userData) {
    const token = userData.accessToken;

    if (token) {
      OPTIONS.headers = {
        ...OPTIONS.headers,
        "X-Authorization": token,
      };
    }
  }

  if (method !== "GET") {
    OPTIONS.method = method;
  }

  if (data) {
    OPTIONS.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(url, OPTIONS);

    if (response.status === 409) {
      return {
        status: 409,
        message: "Тhis email already exists",
      };
    }

    if (response.status === 403 || response.status === 401) {
      return {
        status: response.status,
        message: "Email or password incorrect",
      };
    }

    if (response.status === 204) {
      return;
    }

    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);

    return {
      status: response.status,
      message: "Something went wrong",
    };
  }
}

export const get = serverRequester.bind(null, "GET");
export const post = serverRequester.bind(null, "POST");
export const put = serverRequester.bind(null, "PUT");
export const del = serverRequester.bind(null, "DELETE");
