const Project = (props) => {
  return (
    <article className='post'>
      <a href={props.linkUrl} target='_blank' rel='noreferrer'>
        <img
          src={props.imgUrl}
          aria-label={props.title}
          className='post-img'
        />
      </a>
      <h3 className='post-title'>{props.title}</h3>
      <p className='post-desc project-desc'>{props.description}</p>
    </article>
  );
};

export default Project;