import { useState, useEffect } from 'react';
import axios from 'axios';

const useAppData = (fullStartDate) => {
  const [posts, setPosts] = useState([]);
  const [apiError, setApiError] = useState({});
  
  const day = `${fullStartDate.getDate()}`;
  const month = `${fullStartDate.getMonth() + 1}`;
  const startDate = `${fullStartDate.getFullYear()}-${month}-${day}`;

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?start_date=${startDate}&api_key=${process.env.REACT_APP_API_KEY}`)
      .then(response => setPosts(response.data.reverse()))
      .catch(error => setApiError(error));
  }, [startDate]);

  return { posts, apiError };
};

export default useAppData;