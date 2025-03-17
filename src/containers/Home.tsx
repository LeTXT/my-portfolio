import Hero from '../sections/hero/Hero'
import Language from '../sections/languages/Languages'
import Project from '../sections/project/Projects'
import LetsTalk from '../sections/letsTalk/LetsTalk'
import Clock from '../sections/clock/Clock'

import './home.scss'

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