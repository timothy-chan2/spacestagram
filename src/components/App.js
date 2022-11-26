import { useState } from 'react';

import Post from './Post';
import Navbar from './Navbar';
import Loading from './Loading';
import StartDatePicker from './StartDatePicker';
import ScrollTopBtn from './ScrollTopBtn';

import useAppData from '../hooks/useAppData';

// The App component shows the start date picker and all the images
// from the start date until today. If data cannot be fetched,
// it will display a relevant error message
const App = () => {
  const [date, setDate] = useState(new Date());
  const [posts, setPosts] = useState([]);
  const apiError = useAppData(date, setPosts);

  console.log('The following are the posts:', posts);
  
  const images = posts.map(post => {
    return (
      <Post
        key={post.date}
        id={post.date}
        url={post.url}
        title={post.title}
        description={post.explanation}
        media={post.media_type}
      />
    );
  });

  return (
    <div className='app'>
      <header>
        <Navbar />
        <h2>Brought to you by NASA's Astronomy Picture of the Day (APOD) API</h2>
      </header>
      <main>
        {posts.length === 0 && Object.keys(apiError).length === 0 && <Loading />}
        {Object.keys(apiError).length > 0 && <h3>Error: {apiError.message}</h3>}
        {posts.length > 0 && Object.keys(apiError).length === 0 &&
          <StartDatePicker
            date={date}
            setDate={setDate}
            setPosts={setPosts}
          />
        }
        {Object.keys(apiError).length === 0 && images}
        <ScrollTopBtn />
      </main>
      <footer>
        <p>Made with ❤️ by Timothy Chan in Quebec, Canada</p>
      </footer>
    </div>
  );
};

export default App;