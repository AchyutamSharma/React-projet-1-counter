import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Suspense fallback ={<div className='text-6xl grid place-content-center bg-zinc-700 text-amber-50 font-mono'> Loading...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
)
