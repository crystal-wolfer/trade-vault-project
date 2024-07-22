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

  try {
    const response = await fetch(url, OPTIONS); // Use the URL as the first argument
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const result = await response.json(); // Await the JSON parsing
    return result;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw error;
  }
}

export const get = serverRequester.bind(null, "GET");
export const post = serverRequester.bind(null, "POST");
export const put = serverRequester.bind(null, "PUT");
export const del = serverRequester.bind(null, "DELETE");
