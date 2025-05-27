import '../styles/Projects.css';

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <p>Here are some of the projects I have worked on.</p>

      <div className="project-item">
        <h3>
          <a
            href="https://blood-bank-tau-plum.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blood Donation Website
          </a>
        </h3>
        <p>
          React + Express + MongoDB based full-stack platform to connect donors
          and hospitals in emergencies.
        </p>
      </div>

      <div className="project-item">
        <h3>
          <a
            href="https://e-commerce-ashy-tau.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            E-Commerce
          </a>
        </h3>
        <p>
          React + Express based frontend application for e-commerce website.
        </p>
      </div>

      <div className="project-item">
        <h3>
          <a
            href="https://children-therapy-center-five.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Children Therapy Website
          </a>
        </h3>
        <p>
          React + Express + MongoDB based full-stack platform for therapy
          services.
        </p>
      </div>

      <div className="project-item">
        <h3>
          <a
            href="https://github.com/suryaprabhat?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            Some Other Project
          </a>
        </h3>
        <p>
          Visit my github to see more projects.
        </p>
      </div>
    </div>
  );
};

export default Projects;
