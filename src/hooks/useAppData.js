import { useState, useEffect } from 'react';
import axios from 'axios';

import { getShortDate } from '../helpers/selectors';

const useAppData = (fullStartDate, setPosts) => {
  const [apiError, setApiError] = useState({});
  
  const startDate = getShortDate(fullStartDate);

  useEffect(() => {
    axios.get(`/api/${startDate}`)
      .then(response => setPosts(response.data))
      .catch(err => {
        if (err === 'object' && err !== null && !Array.isArray(err)) {
          setApiError(err);
        }
      });
  }, [startDate, setPosts]);

  return apiError;
};

export default useAppData;