import { useState } from 'react';

const Post = (props) => {
  const [buttonText, setButtonText] = useState('Like');

  const defaultDate = new Date(props.id);
  const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December'][defaultDate.getMonth()];
  const longDate = `${month} ${defaultDate.getDate() + 1}, ${defaultDate.getFullYear()}`;

  const clicked = () => {
    buttonText === 'Like' ? setButtonText('Unlike') : setButtonText('Like');
  }
  
  return (
    <article className='post'>
      <img src={props.imgUrl} aria-labelledby={props.id} className='post-img' /> 
      <h3 className='post-title'>{props.title} - {longDate}</h3>
      <p id={props.id} className='post-desc'>{props.description}</p>
      <button
        data-message='Like or unlike the picture'
        onClick={() => clicked()}
        className='post-like-btn'>
          {buttonText}
      </button>
    </article>
  );
}

export default Post;