const { VITE_API_KEY } = import.meta.env

const requests = {
    trending:`trending/all/day?api_key=${VITE_API_KEY}&language=en-US`,
    netflixOriginals:`discover/tv?api_key=${VITE_API_KEY}&with_networks=213`,
    topRated:`movie/top_rated?api_key=${VITE_API_KEY}&language=en-US`,
    actionMovies:`discover/movie?api_key=${VITE_API_KEY}&with_genres=28`,
    comedyMovies:`discover/movie?api_key=${VITE_API_KEY}&with_genres=35`,
    horrorMovies:`discover/movie?api_key=${VITE_API_KEY}&with_genres=27`,
    romanceMovies:`discover/movie?api_key=${VITE_API_KEY}&with_genres=10749`,
    documentaries:`discover/movie?api_key=${VITE_API_KEY}&with_genres=99`
}
export default requests