import MyName from "../../common/components/myName/Myname.jsx"
import ScrollAnimation from "../../common/components/ScrollAnimation/ScrollAnimation.jsx"
import curriculum from "../../assets/pdfs/CVFedericoPrivitera.pdf"
import { IconsContainer } from "../../common/components/IconsContainer/IconsContainer.jsx"
import {useState} from 'react'


export const Inicio = () => {
    
    
console.log()
    return (
        <>
            <div className="inicio-container">

                <div className="nombre-scroll-container">
                   <MyName nombre="Federico Privitera" title="Software Developer"/>
                    <a className={"button-cv"} href={curriculum} download={"CVFedericoPrivitera"} > Descargar CV </a>

                    <div className="container-social-icons-responsive">

                        <IconsContainer/>

                    </div>

                </div>
                    
                    
                   <ScrollAnimation  text="SCROLL"/>

            </div>
   

                
        </>
    )
}