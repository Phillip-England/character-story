import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import './index.css';
import Home from './routes/Home'
import CreateCharacter from './routes/CreateCharacter';
import PlayHome from './routes/PlayHome';
import Inventory from './routes/Inventory';

//=================

const characterData = [
  {key:0, name:'Paul'},
  {key:1, name:'George'},
  {key:2, name:'Stanley'}
]

//=================


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/character/create' element={<CreateCharacter/>} />
        <Route path='/play/home/:characterID' element={<PlayHome/>} />
        <Route path='/play/inventory/:characterID' element={<Inventory/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
