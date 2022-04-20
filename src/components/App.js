import './App.css';

import Post from './Post';
import Loading from './Loading';
import useAppData from '../hooks/useAppData';

const App = () => {
  const { posts, apiError } = useAppData();
  
  const images = posts.map(post => {
    return (
      <Post
        key={post.date}
        id={post.date}
        imgUrl={post.url}
        title={post.title}
        description={post.explanation}
      />
    );
  });

  return (
    <div className="App">
      <header>
        <h1>Spacestagram</h1>
        <h2>Brought to you by NASA's Astronomy Picture of the Day (APOD) API</h2>
      </header>
      <main>
        {posts.length === 0 && Object.keys(apiError).length === 0 && <Loading />}
        {Object.keys(apiError).length > 0 && <p>{apiError.status}: {apiError.data}</p>}
        {images}
      </main>
    </div>
  );
}

export default App;
