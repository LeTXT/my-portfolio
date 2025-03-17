import { RefObject } from 'react';

export const selectLanguage = (ref:RefObject<HTMLSelectElement | null>, set:React.Dispatch<React.SetStateAction<string>>) => {

    if (ref.current === null) return

    const selectValue = ref.current.value

    set(selectValue)
}