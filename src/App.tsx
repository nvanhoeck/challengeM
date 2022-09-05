import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Result from './pages/result/result';
import Start from './pages/start/Start';
import VraagDrie from './pages/vraagDrie/VraagDrie';
import VraagEen from './pages/vraagEen/VraagEen';
import VraagTwee from './pages/vraagTwee/VraagTwee';
import VraagVier from './pages/vraagVier/VraagVier';
import VraagVijf from './pages/vraagVijf/VraagVijf';
import VraagZes from './pages/vraagZes/VraagZes';
import VraagZeven from './pages/vraagZeven/VraagZeven';

export const ScoreContext = React.createContext({
  score: 0,
  setScore: {} as any
});

function App() {
  const [score, setScore] = useState(0)
  const value = { score, setScore};

 

  return (
    <div className="App">
      <header></header>
      <main>
        <ScoreContext.Provider value={value}>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/start' element={<Start />}></Route>
            <Route path='/vraag-een' element={<VraagEen />}></Route>
            <Route path='/vraag-twee' element={<VraagTwee />}></Route>
            <Route path='/vraag-drie' element={<VraagDrie />}></Route>
            <Route path='/vraag-vier' element={<VraagVier />}></Route>
            <Route path='/vraag-vijf' element={<VraagVijf />}></Route>
            <Route path='/vraag-zes' element={<VraagZes />}></Route>
            <Route path='/vraag-zeven' element={<VraagZeven />}></Route>
            <Route path='/result' element={<Result />}></Route>
          </Routes>
        </ScoreContext.Provider>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
