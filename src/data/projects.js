import { ReactIcon, HtmlIcon, SassIcon, CssIcon, BootstrapIcon, Firebase, Webpack, Javascript } from '../assets/icons/tecnologias/index.jsx'
import {RickandMortyIMG, CitasVeterinariaIMG, GastoSemanalIMG}  from '../assets/ImagenesProyectos/index.js'

const projects = [{
    id: 1,
    title: "Rick & Morty",
    descripcion: "Buscador de personajes de la serie Rick and Morty",
    image: RickandMortyIMG,
    link: "https://api-react-rick-morty.netlify.app/",
    tecnologias: [
        { name: "React", icon: ReactIcon },
        { name: "Bootstrap", icon: BootstrapIcon },
    ]
},
    {
    id: 2,
    title: "Citas Veterinaria",
    descripcion: "Creacion de citas para una veterinaria con POO",
    image: CitasVeterinariaIMG,
    link: "https://veterinariacitasfedeprivitera.netlify.app/",
    tecnologias: [
        { name: "Html", icon: HtmlIcon }, 
        { name: "Css", icon: CssIcon },
        {name: "Bootstrap", icon: BootstrapIcon},
        { name: "JavaScript", icon: Javascript},
    ]
    },
    {
    id: 3,
    title: "Gasto Semanal",
    descripcion: "Control de gastos semanales",
    image: GastoSemanalIMG,
    link: "https://gastosemanal-fedeprivitera.netlify.app/",
    tecnologias: [ 
    { name: "Html", icon: HtmlIcon },
    { name: "Css", icon: CssIcon },
    {name: "Bootstrap", icon: BootstrapIcon},
    { name: "JavaScript", icon: Javascript},
]
    }
]

export { projects }   