import { useState, useEffect } from 'react';
import axios from 'axios';

import { getShortDate } from '../helpers/selectors';

const useAppData = (fullStartDate) => {
  const [posts, setPosts] = useState([]);
  const [apiError, setApiError] = useState({});
  
  const startDate = getShortDate(fullStartDate);

  useEffect(() => {
    axios.get(`/api/${startDate}`)
      .then(response => setPosts(response.data))
      .catch(error => setApiError(error));
  }, [startDate]);

  return { posts, apiError };
};

export default useAppData;