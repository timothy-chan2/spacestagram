import { useState, useEffect } from 'react';
import axios from 'axios';

import { getShortDate } from '../helpers/selectors';

const useAppData = (fullStartDate) => {
  const [posts, setPosts] = useState([]);
  const [apiError, setApiError] = useState({});
  
  const startDate = getShortDate(fullStartDate);

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?start_date=${startDate}&api_key=${process.env.GOV_DATA_API_KEY}`)
      .then(response => setPosts(response.data.reverse()))
      .catch(error => setApiError(error));
  }, [startDate]);

  return { posts, apiError };
};

export default useAppData;