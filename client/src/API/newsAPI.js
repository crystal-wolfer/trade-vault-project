export const getNews = async () => {
  const url =
    "https://news-api14.p.rapidapi.com/v2/search/articles?query=cryotocurrency&language=en&limit=2";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "13dce977a2msh389b1afb1cf7258p197a51jsn2d1d7d2362e7",
      "x-rapidapi-host": "news-api14.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    return result.data;
  } catch (error) {
    console.error(error);
  }
};


// using the following API: https://rapidapi.com/bonaipowered/api/news-api14/playground/apiendpoint_8ef933e7-215e-4a0f-bc5f-f85bebd24f34