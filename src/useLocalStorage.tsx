import {useState} from 'react'

export default function useLocalStorage() {
    const [value, setValue] = useState()

    return [value, setValue]
}