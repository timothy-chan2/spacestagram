import { useState, useEffect } from 'react';
import axios from 'axios';

const useAppData = () => {
  const [posts, setPosts] = useState([]);
  const [apiError, setApiError] = useState('');

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?start_date=2022-04-18&api_key=${process.env.REACT_APP_API_KEY}`)
      .then(response => setPosts(response.data.reverse()))
      .catch(error => setApiError(error.response));
  }, []);

  return { posts, apiError };
}

export default useAppData;