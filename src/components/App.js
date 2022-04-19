import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

import Post from './Post';

const App = () => {
  const [postData, setPostData] = useState('');
  const [apiError, setApiError] = useState('');

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?start_date=2022-04-18&api_key=${process.env.REACT_APP_API_KEY}`)
      .then(response => setPostData(response.data))
      .catch(error => setApiError(error.response));
  }, []);
  
  const images = postData.map(post => {
    return (
      <Post
        key={post.date}
        id={post.date}
        imgUrl={post.url}
        title={post.title}
        description={post.explanation}
      />
    );
  });

  return (
    <div className="App">
      <header>
        <h1>Spacestagram</h1>
        <h2>Brought to you by NASA's Astronomy Picture of the Day (APOD) API</h2>
      </header>
      <main>
        {apiError && <p>{apiError.status}: {apiError.data}</p>}
        {images}
      </main>
    </div>
  );
}

export default App;
