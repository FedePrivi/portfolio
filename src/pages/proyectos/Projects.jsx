

import { Card } from "../../common/components/card/Card.jsx";
import {projects} from "../../data/projects.js"

export const Projects = () => {



  return (
    <>
      <div className="projects-container">
        <h2 className="title-projects">Proyectos</h2>
        <div className="cards-container">
          {
            projects.map((project) =>  <Card key={project.id} project={project}/>)
          }      
        </div>
      </div>
    </>
  );
};
