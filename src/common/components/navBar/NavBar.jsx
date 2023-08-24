import { useEffect, useState } from 'react'
import {IconsContainer} from '../IconsContainer/IconsContainer.jsx'




const NavBar = (props) => {



    const [animacion, setAnimacion] = useState(false)


    useEffect(()=> {
        if (!animacion) {
            setAnimacion(true)
        } else {
            setAnimacion(false)
        }
            return () => {
                setTimeout(() => {
                    setAnimacion(false)
                }, 350);
            }
    }, [props])

 

    useEffect(() => {
        const button_home = document.querySelector(".marca")
             
        button_home.addEventListener("click", () => {
            window.scrollTo(0, 0)
        })
    }, [])




    return (
        <nav className="navbar">
            <h1 className='marca'>FP</h1>

            <div  className={`seccionActual ${animacion ? "animacion" : ""}`} > {props.seccionActual} </div>
            
            
             <IconsContainer/>


        </nav>
    )
}

export  {NavBar}