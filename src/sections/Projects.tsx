import Card from './components/Card'
import { cardsArray } from '../assets/cardsArray'
import '../styles/sections/projects.scss'

function Project() {
    
    return (
        <div className="project">
            <div className='projectTitle'>
                <h2>
                    Projetos
                </h2>
            </div>
            <div className='containerCard'>
                {cardsArray.map((item, index) => {
                return (
                    <Card 
                    key={index}
                    title={item?.title}
                    img={item?.img}
                    language={item?.language}
                    gitHub={item?.gitHub}
                    start={item?.start}
                    />
                )
                })}
            </div>
            <div className='bugWarning'>
                <p>Feedbacks são bem-vindos! Se encontrar um bug, entre em contato para que eu possa melhorar o projeto e crescer como desenvolvedor. 🚀</p>
            </div>
        </div>
    )
}

export default Project