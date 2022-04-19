import './App.css';

import Post from './Post';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Spacestagram</h1>
        <h2>Brought to you by NASA's Astronomy Picture of the Day (APOD) API</h2>
      </header>
      <main>
        <Post />
      </main>
    </div>
  );
}

export default App;
