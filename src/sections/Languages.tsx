import { useState, useEffect, useRef } from 'react'
import { languageArray } from '../assets/languageArray'

import '../styles/sections/languages.scss'

function Language() {
  const languageRef = useRef<HTMLUListElement | null>(null);
  const [scrollX, setScrollX] = useState<number>(0)
  const speed = .1

  useEffect(() => {
    const step = () => {

      setScrollX((prev) => {

        const ref = languageRef.current

        if (!ref) return prev

        if (Math.abs(prev) >= ref.scrollWidth / 4) {
          return 0
        }
        return prev - speed;
      });

      requestAnimationFrame(step)
    };

    requestAnimationFrame(step)
    
  }, []);

    return (
        <div className='language-wrapper'>
            <ul 
                className="containerLanguage animation"
                ref={languageRef}
                style={{ transform: `translateX(${scrollX}px)` }}
            >
            
            {
                [...languageArray, ...languageArray, ...languageArray, ...languageArray].map((item, index) => {
                    return (
                        <li key={index} className='language'
                        >
                            <img src={item.img} alt='' />
                            <p>{item.language}</p>
                        </li>
                    )
                })
            }
            </ul>
        </div>
        
    )
}

export default Language