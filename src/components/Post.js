import { useState } from 'react';

const Post = (props) => {
  let likeStatus = localStorage.getItem(`like-status-${props.id}`);
  const [buttonText, setButtonText] = useState(likeStatus || 'Like');

  const defaultDate = new Date(props.id);
  const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December'][defaultDate.getMonth()];
  const longDate = `${month} ${defaultDate.getDate() + 1}, ${defaultDate.getFullYear()}`;

  const clicked = () => {
    buttonText === 'Like' ? setButtonText('Unlike') : setButtonText('Like');

    if (likeStatus === null || likeStatus === 'Like') {
      likeStatus = 'Unlike';
      localStorage.setItem(`like-status-${props.id}`, 'Unlike');
    } else if (likeStatus === 'Unlike') {
      likeStatus = 'Like';
      localStorage.setItem(`like-status-${props.id}`, 'Like');
    }
  }
  
  return (
    <article className='post'>
      <img src={props.imgUrl} aria-labelledby={props.id} className='post-img' /> 
      <h3 className='post-title'>{props.title} - {longDate} {likeStatus === 'Unlike' && ' ❤️'}</h3>
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