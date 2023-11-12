import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export function Pages() {
return(
  <>
    <div id='header'>
      <a href='../index.html'><ol>Page1</ol></a>
      <a href="../page2.html"><ol>page2</ol></a>
      <a href="../page3.html"><ol>page3</ol></a>
      
      
    </div>
  </>
)
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
  <Pages />
    <h1>PAGE 1</h1>
   
    
    </>
  )
}

export default App
