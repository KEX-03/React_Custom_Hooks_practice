import React from 'react'
import useLocalStorage from './useLocalStorage'

function App() {
  const [name, setName] = useLocalStorage('')

  return (
    <input 
      type="text" 
      value={name} 
      onChange={e => setName(e.target.value)}
    />
  )
}

export default App
