import React from 'react'
import Popup from './Components/Popup'

function App() {
  return (
    <div className="w-full relative p-5 m-0 min-h-screen flex flex-wrap gap-10 justify-center content-center bg-zinc-900">
      <header className="absolute text-xl left-5 top-5 text-zinc-300 font-semibold">
        <h1 className="p-5 pt-4 bg-zinc-300 bg-opacity-10 rounded-xl">
          Testing POC's
        </h1>
      </header>
      <Popup />
    </div>
  )
}

export default App
