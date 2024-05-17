import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Suspense fallback ={<div className='text-7xl grid place-content-center bg-zinc-800 text-amber-50 font-mono h-screen'> Loading...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
)
