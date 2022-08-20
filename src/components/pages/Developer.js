import projects from '../../helpers/projectData';

import Navbar from '../Navbar';
import Project from '../Project';

// The Developer component shows some of the projects I have done
// with links to my GitHub page if it is not deloyed
const Developer = () => {
  const projectCards = projects.map(project => {
    return (
      <Project
        key={project.title}
        title={project.title}
        imgUrl={project.imgUrl}
        linkUrl={project.linkUrl}
        description={project.desc}
      />
    );
  });
  
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
        {projectCards}
      </main>
    </div>
  );
};

export default Developer;