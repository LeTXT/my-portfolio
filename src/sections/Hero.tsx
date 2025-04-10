import { useState, useEffect } from 'react'
import {toWrite, coffeeError} from '../utils/toWrite.ts'

import '../styles/sections/hero.scss'

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

            </div>
            
            <div className='greetingClass'>
                <h2>Olá,</h2>
                <h1>Sou </h1>
                <h3>{write}</h3>
            </div>
            <div>
            </div>

        </div>
    )
}

export default Hero