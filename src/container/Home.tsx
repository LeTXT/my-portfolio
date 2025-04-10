import Hero from '../sections/Hero'
import Language from '../sections/Languages'
import Project from '../sections/Projects'
import LetsTalk from '../sections/LetsTalk'
import Clock from '../sections/Clock'

import '../styles/container/home.scss'

const Home: React.FC = () => {
    return (
        <div className="home">
            <Hero />
            <Language />
            <Project />
            <LetsTalk />
            <Clock />
        </div>
    )
}

export default Home