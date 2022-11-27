const API_KEY = "622a03e1f47364ba415b06854fcd898a";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
 
  fetchActionMovies: `/discover/tv?api_key=${API_KEY}&with_networks=28`,
  fetchComedyMovies: `/discover/tv?api_key=${API_KEY}&with_networks=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_networks=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_networks=107`,
  fetchDocumentariesMovies: `/discover/tv?api_key=${API_KEY}&with_networks=99`,
};

export default requests;
