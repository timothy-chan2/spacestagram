import { useState, useEffect } from 'react';
import axios from 'axios';

import { getShortDate } from '../helpers/selectors';

const useAppData = (fullStartDate, setPosts) => {
  const [apiError, setApiError] = useState({});
  
  const startDate = getShortDate(fullStartDate);

  useEffect(() => {
    axios.get(`/api/${startDate}`)
      .then(response => setPosts(response.data))
      .catch(error => setApiError(error));
  }, [startDate, setPosts]);

  return apiError;
};

export default useAppData;