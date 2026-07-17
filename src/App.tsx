import React, { useState } from 'react'

function App() {
  const [name, setName] = useState('')

  return (
    <input 
      type="text" 
      value={name} 
      onChange={e => setName(e.target.value)}
    />
  )
}

export default App
