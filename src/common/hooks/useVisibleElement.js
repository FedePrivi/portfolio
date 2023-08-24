import { useEffect, useState } from "react";

 const useVisibleElement = (myRef) => {


    const  [state, setState] = useState(false)
    
    const options = { threshold: 1 }
    var contador = 0;


   useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting ) {
                setState(true)
            } 
            

            if (entry.intersectionRatio === 1 ) {
                contador++;

                if (contador >= 1) {
                    observer.disconnect();
                }
            }

          });
    }, options);

    
    if (myRef.current) {
      observer.observe(myRef.current); //comienza a observar el elemento actual
    }

  }, [myRef]);

   return [state];
}

export default useVisibleElement;