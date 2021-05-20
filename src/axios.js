import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
})

export default instance;

// instance.get(fetchTrending) --> baseURL + fetchTrending
// "https://api.themoviedb.org/3/trending/all/weel?api_key=${API_KEY}&language=en-US"