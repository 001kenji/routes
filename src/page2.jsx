import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Pages } from './App.jsx'
function Page2() {
    return(
        <>
        <h1>PAGE2</h1>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root2')).render(
    <React.StrictMode>
        <Pages />
      <Page2 />
    </React.StrictMode>,
  )
