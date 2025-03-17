import { useEffect, useRef, useState } from 'react';
import { selectLanguage } from '../../utils/selectLanguage';

interface CardProps {
    title: string; 
    img: string;
    language: string[]; 
    gitHub: string[];
    start: string[];
}

function Card({title, img, language, gitHub, start}: CardProps) {
    const [selectValue, setSelectValue] = useState(language[0])
    const selectRef = useRef<HTMLSelectElement>(null);

    useEffect(() => {
        selectLanguage(selectRef, setSelectValue); 
    }, [selectValue]);

    return (
        <div className='card'>

            <div className="selectGitContainer">

                <select 
                    onChange={() => selectLanguage(selectRef, setSelectValue)}
                    ref={selectRef}
                    disabled={language.length === 1}
                >

                    {language.map((item, index) => (
                        <option value={item} key={item + index}>{item}</option>
                    ))}

                </select>

                <a href={gitHub[language.indexOf(selectValue)]} target="_blank" rel="noopener noreferrer">
                GitHub
                <img src="./img/arrow-link.svg" alt="" />
                </a>

            </div>

            <a href={start[language.indexOf(selectValue)]} target="_blank" rel="noopener noreferrer" className='linkImg'>
                <img src={img} alt={title} />
            </a>
        </div>
    )
}

export default Card;