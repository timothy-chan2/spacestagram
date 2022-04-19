import { useState, useEffect } from 'react';
import axios from 'axios';

const Post = () => {
  const [postData, setPostData] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [buttonText, setButtonText] = useState('Like');

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`)
      .then(response => setPostData(response.data))
      .catch(error => setErrorMessage(error.response));
  }, []);

  const clicked = () => {
    buttonText === 'Like' ? setButtonText('Unlike') : setButtonText('Like');
  }
  
  return (
    <article>
      {errorMessage && <p>{errorMessage.status}: {errorMessage.data}</p>}
      <img src={postData.url} alt={postData.title} /> 
      <h3>{postData.title} ** {postData.date}</h3>
      <p>{postData.explanation}</p>
      <button onClick={() => clicked()}>{buttonText}</button>
    </article>
  );
}

export default Post;