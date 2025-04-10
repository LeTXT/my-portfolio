import { contactsArray } from '../assets/contactsArray'
import '../styles/sections/letsTalk.scss'

function letsTalk () {
    return (
        <div className="letsTalk">
            <div className="title">
                <h2>Vamos conversar!</h2>
            </div>
            <div className='contacts'>
                {
                    contactsArray.map((item, index) => {
                        return (
                            <div key={index} className='link'>
                                
                                <a href={item.link} target="_blank" rel="noopener noreferrer"><img src={item.img} alt={item.title} /></a>
                            </div>
                        )
                    })
                                
                }
            </div>
        </div>
    )
}

export default letsTalk