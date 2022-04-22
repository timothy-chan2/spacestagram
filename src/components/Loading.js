// The Loading component shows a spinning wheel while axios
// is fetching the data from the NASA API
const Loading = () => {
  return (
    <article>
      <img
        className='loading-image'
        src='images/loading.png'
        alt='Loading'
      />
      <h3>Loading...</h3>
    </article>
  );
};

export default Loading;