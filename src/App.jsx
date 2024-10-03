import { Header } from "./components/Header.jsx"
import { Inicio } from "./pages/Inicio/Inicio.jsx";
import { Main } from "./components/Main.jsx";
import { Description } from "./pages/description/description.jsx";
import  { Projects }  from "./pages/proyectos/Projects.jsx";
import { Footer } from "./pages/footer/Footer.jsx";
import { Skills } from "./pages/skills/Skills.jsx";
import {NavBar} from "./common/components/navBar/NavBar.jsx";

import { useRef, useEffect, useState } from "react";

import "./common/styles/main.scss"


 const App = () => {


  const [seccionActual, setSeccionActual] = useState("")

 
  const inicio = useRef(null)
  const descripcion = useRef(null)
  const proyectos = useRef(null)
  const skills = useRef(null)
  
  
  const secciones = [inicio, descripcion, proyectos, skills]
  
  
  const options = {
    root: null,
    threshold: 0.5,
  }
  
  
  useEffect(() => {
    for (let i = 0; i < secciones.length; i++) {

      const seccion = secciones[i]

      const observer = new IntersectionObserver( (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // console.log(entry.target.id) 
            setSeccionActual(entry.target.id)
          }
        })
       
    } , options)
      
      if (seccion.current) {
        observer.observe(seccion.current); 
      }
      
    }
  
  }, [])
  

  return (



    <div className="app-container">

        <NavBar seccionActual={seccionActual} />      
        <Header  >
          <div ref={inicio} id={"Inicio"}>
            <Inicio />
          </div>
        </Header>
          <Main>
            <div ref={descripcion} id={"Sobre Mi"}>
              <Description />       
            </div>

          <div ref={proyectos} id={"Mis Proyectos"}>
            <Projects/>
          </div>

          <div ref={skills} id="Skills">
            <Skills/>
          </div>
            
          </Main>

          <Footer>
              <div className="division"></div>
                <div className="container-colores">
                  <div className="colores">
                    <div className="item-color fondo"></div>
                    <div className="item-color primario"></div>
                    <div className="item-color secundario"></div>
                  </div>
                </div>

                <div className="final">
                  <h4>Federico Privitera ©</h4>
                  <p>2023</p>
                </div>
          </Footer> 



    </div>
    
  )
}

export default App


