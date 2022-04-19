import { useState } from 'react';

const Post = (props) => {
  const [buttonText, setButtonText] = useState('Like');

  const clicked = () => {
    buttonText === 'Like' ? setButtonText('Unlike') : setButtonText('Like');
  }
  
  return (
    <article>
      <img src={props.imgUrl} aria-labelledby={props.id} /> 
      <h3>{props.title}, {props.id}</h3>
      <p id={props.id}>{props.description}</p>
      <button
        data-message='Like or unlike the picture'
        onClick={() => clicked()}>
          {buttonText}
      </button>
    </article>
  );
}

export default Post;