import {useState} from 'react'

function getSavedValue(key, initialValue) {
    const savedValue = JSON.parse(localStorage.getItem(key))

    if (savedValue) return savedValue

    if (initialValue instanceof Function) return initialValue()
    return initialValue
}

export default function useLocalStorage(initialValue) {
    const [value, setValue] = useState(() => {
        return getSavedValue(key, initialValue)
    })

    return [value, setValue]
}