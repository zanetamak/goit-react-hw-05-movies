import axios from 'axios';

const apiKey = '25e2aa0c0d0f2efeb739a87ae42543b5';

const baseUrl = 'https://api.themoviedb.org/3/';

export const getTrending = async () => {
    const response = await axios.get(`${baseUrl}trending/all/week?api_key=${apiKey}`);
    return response.data;
}

//  życie identyfikatora filmu (movieID) w endpointach związanych z konkretnym filmem, takimi jak 
// get - movie - details, get - movie - credits i get - movie - reviews, jest związane z konwencją używaną przez API themoviedb.org.
export const getKeyword = async (keyword) => {
 const response = axios.get(`${baseUrl}/search/movie?api_key=${apiKey}&query=${keyword}`);
  return response.data.results;
};
export const getDetails = async (movieId) => {
 const response = await axios.get(`${baseUrl}/movie/${movieId}?api_key=${apiKey}`);
return response.data.results;
};

export const getCredits = async (movieId) => {
   const response = await axios.get(`${baseUrl}/movie/${movieId}/credits?api_key=${apiKey}`);
  return response.data.results;  
}

export const getReviews = async (movieId) => {
   const response = axios.get(`${baseUrl}/movie/${movieId}/reviews?api_key=${apiKey}`);
  return response.data.results;  
}



