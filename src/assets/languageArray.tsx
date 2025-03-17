
const language: string[] = ['JavaScript', 'HTML', 'CSS', 'TypeScript', 'React', 'Sass', 'Figma', 'Git', 'Python']

const path: string = '/img/language/'

export const languageArray: { img: string; language: string }[] = []


for(const value of language) {
    const obj = {img: path + value.toLowerCase() + '.svg', language: value}
    languageArray.push(obj)
}      
