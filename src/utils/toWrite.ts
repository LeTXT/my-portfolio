
export const toWrite = (setWrite: React.Dispatch<React.SetStateAction<string>>) => {

    const initialDescription: string = "Explore meus projetos e descubra mais sobre meu trabalho."

    let i: number = 0

    const write = () => {
        if (i < initialDescription.length) {
            setWrite(() => initialDescription.substring(0, i))
                    
            i++
                    
            setTimeout(() => {
                write()
            }, 30)
        }
    }
    
    write()
}

export const coffeeError = (SetCoffeeErro: React.Dispatch<React.SetStateAction<string>>) => {
    const initialDescription: string = 'Café, código e '
    
    const array = ['404', 'e██o█', 'Undefined', 'NaN', 'Null', 'ꐟꁄꁄꇞ', 'Error']

    let i: number = 0

    const write = () => {
        if(i < array.length) {
            SetCoffeeErro(initialDescription + array[i])

            i++

            setTimeout(() => {
                if(i == array.length) i = 0 
                
                write()
            }, 400)
        }
    }

    write()

}