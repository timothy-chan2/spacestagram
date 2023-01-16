// The Project component shows an image, title, and
// description of a project I previously worked on
const Project = (props) => {
  return (
    <article className='post'>
      {props.linkUrl &&
        <a href={props.linkUrl} target='_blank' rel='noreferrer'>
          <img
            src={props.imgUrl}
            aria-label={props.title}
            className='post-img'
            loading='lazy'
          />
        </a>
      }
      {props.videoUrl &&
        <iframe
          src={props.videoUrl}
          aria-labelledby={props.title}
          className='post-img post-vid'
          title={props.title}
          loading='lazy'
        >
          <p>Your browser does not support iframes.</p>
        </iframe>
      }
      <h3 className='post-title'>{props.title}</h3>
      <p className='post-desc project-desc'>{props.description}</p>
    </article>
  );
};

export default Project;