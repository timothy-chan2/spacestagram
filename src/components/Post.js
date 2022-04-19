const Post = () => {
  const data = {
    date: "2022-04-18",
    explanation: "The mission was to document night-flying birds -- but it ended up also documenting a beautiful sky.",
    hdurl: "https://apod.nasa.gov/apod/image/2204/MwMertola_Claro_2000.jpg",
    title: 	"Stars and Planets over Portugal"
  };
  
  return (
    <article>
      <img src={data.hdurl} alt={data.title} /> 
      <h3>{data.title} ** {data.date}</h3>
      <p>{data.explanation}</p>
      <button>Like</button>
    </article>
  );
}

export default Post;