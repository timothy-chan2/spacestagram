// The LoadingDots component shows three dots that grow and shrink
// at different times while the project cards are loading
const LoadingDots = () => {
  return (
    <article className='loader'>
      <span className='dot1' />
      <span className='dot2' />
      <span className='dot3' />
    </article>
  );
};

export default LoadingDots;