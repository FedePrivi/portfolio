import { Technology } from "../../common/components/Technology/Technology.jsx"
import { useRef, useEffect, useState } from "react";
import useVisibleElement from "../../common/hooks/useVisibleElement.js";


export const Skills = () => {

    
    const tecnologias = ["React", "Java script", "CSS", "Sass", "Html", "Webpack", "Vite"]
    
    const [animacion, setAnimacion] = useState(false)
    
    
    
    const myRef = useRef(null);
   const [state] =  useVisibleElement(myRef)

    useEffect(() => {
      if (state) {
         setAnimacion(true)
      }
    }, [state])
    

    return (
        <>  
            <div  className="skills">
                    <div  ref={myRef} className="container-items">

                        {tecnologias.map( tecnologia => <Technology estado={animacion} key={tecnologia} name={tecnologia} />)}

                    </div>
            </div>
        </>


    )
}