const API_KEY = '49b07055230ea36209fcdcfd8210e67a';

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&width_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchActionMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=10749`,
    fetchCrimeMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=80`,
    fetchDocumentaries: `/discover/movie/?api_key=${API_KEY}&with_genres=99`,
}

export default requests;
