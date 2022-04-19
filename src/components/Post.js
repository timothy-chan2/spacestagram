import { useState } from 'react';

const Post = () => {
  const [buttonText, setButtonText] = useState('Like');
  
  const data = {
    date: "2022-04-18",
    explanation: "The mission was to document night-flying birds -- but it ended up also documenting a beautiful sky.",
    hdurl: "https://apod.nasa.gov/apod/image/2204/MwMertola_Claro_2000.jpg",
    title: 	"Stars and Planets over Portugal"
  };

  const clicked = () => {
    buttonText === 'Like' ? setButtonText('Unlike') : setButtonText('Like');
  }
  
  return (
    <article>
      <img src={data.hdurl} alt={data.title} /> 
      <h3>{data.title} ** {data.date}</h3>
      <p>{data.explanation}</p>
      <button onClick={() => clicked()}>{buttonText}</button>
    </article>
  );
}

export default Post;