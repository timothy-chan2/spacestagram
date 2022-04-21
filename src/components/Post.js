import { useState } from 'react';
import { getLongDate } from '../helpers/selectors';

const Post = (props) => {
  let likeStatus = localStorage.getItem(`like-status-${props.id}`);
  const [buttonText, setButtonText] = useState(likeStatus || 'Like');

  const longDate = getLongDate(new Date(props.id));

  const clicked = () => {
    buttonText === 'Like' ? setButtonText('Unlike') : setButtonText('Like');

    if (likeStatus === null || likeStatus === 'Like') {
      likeStatus = 'Unlike';
      localStorage.setItem(`like-status-${props.id}`, 'Unlike');
    } else if (likeStatus === 'Unlike') {
      likeStatus = 'Like';
      localStorage.setItem(`like-status-${props.id}`, 'Like');
    }
  };
  
  return (
    <article className='post'>
      <img src={props.imgUrl} aria-labelledby={props.id} className='post-img' /> 
      <h3 className='post-title'>
        {props.title} - {longDate}
        {likeStatus === 'Unlike' && <span id={`${props.id}-like`}> ❤️</span>}
      </h3>
      <p id={props.id} className='post-desc'>{props.description}</p>
      <button
        data-message='Like or unlike the picture'
        onClick={() => clicked()}
        className='post-like-btn'
        type='button'
        aria-controls={`${props.id}-like`}
      >
        {buttonText}
      </button>
    </article>
  );
};

export default Post;