const tmdbBaseUrl = "https://api.themoviedb.org/3";
const posterBaseUrl = "https://image.tmdb.org/t/p/w200";

const apiKey = "1ea6bf4e9185a53fe20228a52ea46bf1";

const constructUrl = (path, params = {}) => {
  if (path.slice(0) !== "/") {
    path = "/" + path;
  }
  let newPath = `${tmdbBaseUrl}${path}?api_key=${apiKey}`;

  for (let key in params) {
    if (key !== undefined || params !== undefined)
      newPath += `&${key}=${params[key]}`;
  }
  console.log(newPath);
  return newPath;
};

const discoverMoviePath = constructUrl("/discover/movie");
const genreListPath = constructUrl("/genre/movie/list", { language: "en-US" });

const getDataAsync = async (url) => {
  const request = await fetch(url);
  const data = await request.json();
  return data;
};

export const getDiscoverMovieListAsync = async (genre = []) => {
  return await getDataAsync(
    constructUrl("discover/movie", { with_genres: [...genre].join() })
  );
};

export const getPosterPath = (url) => {
  return `${posterBaseUrl}/${url}?api_key=${apiKey}`;
};

export const getGenreListAsync = async () => {
  return await getDataAsync(genreListPath);
};

export const searchMovieAsync = async (queryString) => {
  return getDataAsync(constructUrl("/search/movie", { query: queryString }));
};
