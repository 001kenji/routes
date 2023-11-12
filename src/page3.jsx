import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { Pages } from './App.jsx'
import './index.css'
import './App.css'
function Page3() {
    return(
        <>
        <h1>PAGE3</h1>
        </>
    )
}
ReactDOM.createRoot(document.getElementById('root3')).render(
    <React.StrictMode>
     <Pages />
      <Page3 />
    </React.StrictMode>,
  )