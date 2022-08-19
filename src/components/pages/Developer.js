import Navbar from '../Navbar';
import Project from '../Project';

const Developer = () => {
  return (
    <div className='App'>
      <header>
        <Navbar />
        <h2 className='developerName'>Timothy Chan</h2>
        <a href='https://linkedin.com/in/timothychan2' target='_blank' rel='noreferrer'>
          <img
            src='images/In-White-34.png'
            aria-label='LinkedIn logo'
          />
        </a>
      </header>
      <main>
        <p className='otherProjects'>My other projects:</p>
        <Project
          title='Trash Panda MTL'
          imgUrl='images/trash-panda.gif'
          linkUrl='https://github.com/andres039/Upcycle-Cradle-Montreal'
          description='A web app that allows Montrealers to extend the life of discarded furniture by displaying their location on an interactive map.'
        />
      </main>
    </div>
  );
};

export default Developer;