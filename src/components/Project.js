const Project = (props) => {
  return (
    <article className='post'>
      <img
        src={props.imgUrl}
        aria-labelledby={props.title}
        className='post-img'
      />
      <h3 className='post-title'>{props.title}</h3>
    </article>
  );
};

export default Project;