export const Card = ({ project }) => {
  return (
    <a href={project.link} target="_blank">
      <div className="card">
        <img className="imagen-proyecto" src={project.image} alt="" />

        <header className="container-title">
          <h3>{project.title} </h3>
        </header>

        <main>
          <article className="descripcion-container">
            <p className="descripcion">{project.descripcion}</p>
          </article>
        </main>

        <footer className="container-logos">
          {project.tecnologias.map((Tec, i) => (
            <div key={i} className="tecnologia">
              <span>{Tec.name}</span>
              <Tec.icon />
            </div>
          ))}
        </footer>
      </div>
    </a>
  );
};
