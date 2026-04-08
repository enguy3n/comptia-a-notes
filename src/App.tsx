import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom';

import HeaderNav from './components/HeaderNav';
import Notes from './components/Notes';

import Unit1 from './pages/Unit1'
import Unit2 from './pages/Unit2';

function TestButton(){
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/comptia-a-notes/unit1");
  };

  return(
    <button onClick={handleClick}>this is a test component!</button>
  )
}

function App() {

  return (
    <>
      <HeaderNav />

      <TestButton />

      <Routes>
        <Route path = "/comptia-a-notes" element={<div className="text-content">This is a home page</div>} />
        <Route path = "/comptia-a-notes/unit1" element={<Notes unitNumber={1} title="test title" bodyContent={<Unit1 />}/>} />
        <Route path = "/comptia-a-notes/unit2" element={<Notes unitNumber={2} title="test title" bodyContent={<Unit2 />}/>} />
      </Routes>
    </>
  )
}

export default App
