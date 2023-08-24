import ICON_GITHUB from '../../../assets/icons/social/logoGithub.svg'
import ICON_LINKEDIN from '../../../assets/icons/social/logoLinkedin.svg'
import ICON_MAIL from '../../../assets/icons/social/logoMail.svg'
import { Icon } from '../icon/Icon.jsx'


const IconsContainer = () => {

     const icons = [
        {ICON: ICON_GITHUB, LINK: "https://github.com/FedePrivi"},
        {ICON: ICON_LINKEDIN, LINK: "https://www.linkedin.com/in/federico-privitera/"},
        {ICON: ICON_MAIL, LINK: "https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtMlQpNjhfsBBVrpSZlgRvdKWrkjrwPlZdBCwPQzSkjVBhdVjbZGJFKpTBFXlcTzMzVjWfbB"},
    ]

    return (

             <ul className={'container-icons'}>
                {icons.map((icon, i) => (<Icon key={i} URL={icon.ICON} LINK={icon.LINK}/>))}
                
            </ul>
    )

}

export {IconsContainer}