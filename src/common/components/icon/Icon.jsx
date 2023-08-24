const Icon = ({URL, LINK}) => {


    return (
        <a href={LINK} target="_blank">
            <img className="icon" src={URL} />
        </a>
    )
        
}

export {Icon}