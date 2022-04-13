const tmdbBaseUrl = "https://api.themoviedb.org/3";
const posterBaseUrl = "https://image.tmdb.org/t/p/w200";

const apiKey = "1ea6bf4e9185a53fe20228a52ea46bf1";

const constructUrl = (path, params = {}) => {
  let newPath = `${tmdbBaseUrl}${path}?api_key=${apiKey}`;

  for (let key in params) {
    newPath += `&${key}=${params[key]}`;
  }
  return newPath;
};

const discoverMovieUrl = constructUrl("/discover/movie");
const genreListUrl = constructUrl("/genre/movie/list", { language: "en-US" });

const getDataAsync = async (url) => {
  const request = await fetch(url);
  const data = await request.json();
  return data;
};

const getData = (url) => {
  const request = fetch(url);
  return request.json();
};

export const getDiscoverMovieListAsync = async () => {
  return await getDataAsync(discoverMovieUrl);
};

export const getPosterPath = (url) => {
  return `${posterBaseUrl}/${url}?api_key=${apiKey}`;
};

export const getGenreListAsync = async () => {
  return await getDataAsync(genreListUrl);
};

export const searchMovie = (queryString) => {
  return getData(constructUrl("/search/movie", { query: queryString }));
};
