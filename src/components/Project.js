const Project = (props) => {
  return (
    <article className='post'>
      <a
        href='https://github.com/andres039/Upcycle-Cradle-Montreal'
        target='_blank'
        rel='noreferrer'
      >
        <img
          src={props.imgUrl}
          aria-labelledby={props.title}
          className='post-img'
        />
      </a>
      <h3 className='post-title'>{props.title}</h3>
      <p className='post-desc project-desc'>{props.description}</p>
    </article>
  );
};

export default Project;