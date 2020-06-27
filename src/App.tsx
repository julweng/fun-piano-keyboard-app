import React from "react"
import { notes } from "./Notes/noteType"
import Octave from "./components/Octave/Octave"
import "./App.css"

const App = () => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const audio = new Audio(`sounds/piano_${event.currentTarget.value}.mp3`)
    audio.play()
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mini Piano Keyboard</h1>
      </header>
      <Octave notes={notes} clickHandler={handleClick} />
    </div>
  )
}

export default App
