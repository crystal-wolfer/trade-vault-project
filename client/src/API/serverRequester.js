export default async function serverRequester(method, url, data){
  const OPTIONS ={};

  if(method =! "GET"){
    OPTIONS.method = method; 
  }

  if (data){
    OPTIONS.headers = {
      "Content-Type": "application/json",
    };

    OPTIONS.body = JSON.stringify(data);
  }
  
  const response = await fetch(method, OPTIONS); 
  const result = response.json(); 

  return result
}

export const get = serverRequester.bind(null, "GET")
export const post = serverRequester.bind(null, "POST")
export const put = serverRequester.bind(null, "PUT")
export const del = serverRequester.bind(null, "DELETE")