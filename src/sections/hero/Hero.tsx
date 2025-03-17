import { useState, useEffect } from 'react'

import './hero.scss'
import {toWrite, coffeeError} from '../../utils/toWrite.ts'

const Hero = () => {

    const [write, setWrite] = useState<string>('')
    const [coffeeErro, SetCoffeeErro] = useState<string>('')


    useEffect(() => {
        toWrite(setWrite)

        coffeeError(SetCoffeeErro)

        return () => {

        }
        
    }, [])

    return (
        <div className="heroClass">
            <div className='verticalClass'>
                <div>
                    <a href='https://www.linkedin.com/in/leandrogdo/' target='_blank'>linkedin.com/in/leandrogdo/</a>
                    <p>{coffeeErro}</p>
                </div>

                {/* <div className='errorClass'>
                    <div className='arrowClass'></div>
                    <p>Eita!</p>
                </div> */}
            </div>
            
            <div className='greetingClass'>
                <h2>Olá,</h2>
                <h1>Sou </h1>
                <h3>{write}</h3>
            </div>
            <div>
                {/* <div className='clickHereClass'>
                    <p>Aperte aqui</p>
                    <div className='arrowClass'></div>
                </div> */}
                
            </div>

        </div>
    )
}

export default Hero