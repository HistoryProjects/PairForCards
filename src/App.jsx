import { useState } from 'react'


import './App.css'
import { Routes, Route} from 'react-router-dom';
import Start from './pages/Start';
import Game from './pages/Game';


function App() {
  const [secund, setSecund] = useState(30);
  const [currentLevel, setCurrentLevel] = useState(1);

  return (
    <div>
      <Routes>
          <Route path="/" element={<Start 
              setSecund = {setSecund}
              setCurrentLevel = {setCurrentLevel}
          />} />
          <Route path="Game" element={<Game 
            secund = {secund} 
            setSecund = {setSecund}
            currentLevel = {currentLevel}
            setCurrentLevel = {setCurrentLevel} 
          />} />
      </Routes>
    </div>
  )
}

export default App
