import React from 'react'
import Classes from './Projects.module.css'
import projectBackground from '../Img/projectBackground.jpg'
import PageHeader from '../PageHeader/PageHeader';

const Projects = () => {
   const mySite = `http://albuba.netlify.app`;
   const todoApp = `http://bubacarrtodo.netlify.app`;
   const weatherApp = `http://abuweather.netlify.app`;

  const MySite = () => {
    window.open(mySite);
  };
  const TodoApp = () => {
    window.open(todoApp);
  };
  const WeatherApp = () => {
    window.open(weatherApp);
  };
  return (
    <div className={Classes.Background} style={{ backgroundImage: `url(${projectBackground})` }}>
      <PageHeader title={"Projects"} />
      <div className={Classes.Projects} id="Projects">
        <div className={Classes.FrameContainer}>
          <iframe
            height="200"
            width="400"
            scrolling="no"
            className={Classes.Iframe}
            title="WeatherApp"
            target="_blank"
            rel="noreferrer"
            src={mySite}
          ></iframe>
          <button onClick={MySite} className={Classes.LinkBtn}>
            My Website
          </button>
        </div>
        <div className={Classes.FrameContainer}>
          <iframe
            height="200"
            width="400"
            scrolling="no"
            className={Classes.Iframe}
            title="WeatherApp"
            target="_blank"
            rel="noreferrer"
            src={todoApp}
          ></iframe>
          <button onClick={TodoApp} className={Classes.LinkBtn}>
            TodoApp
          </button>
        </div>
        <div className={Classes.FrameContainer}>
          <iframe
            height="200"
            width="400"
            scrolling="no"
            className={Classes.Iframe}
            title="WeatherApp"
            target="_blank"
            rel="noreferrer"
            src={weatherApp}
          ></iframe>
          <button onClick={WeatherApp} className={Classes.LinkBtn}>
            WeatherApp
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects
