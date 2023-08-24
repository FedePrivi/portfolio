export const Technology = ({name, estado}) => {

    const clases = name.replace(/\s+/g, '')
 


  
    return (
    <>
        <div className="item"> 
            <div className="name-container">

                <p>{name}</p>

            </div>

            
                <div className="level-container">

                    <div className={estado ? `level ${clases}` : "level"}></div>

                </div>
            
                        
        </div>
    </>)
}