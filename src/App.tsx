import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import Unit1 from './pages/Unit1'
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom';

function TestButton(){
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/comptia-a-notes/unit1");
  };

  return(
    <button onClick={handleClick}>asdasdsadsa</button>
  )
}

function App() {

  return (
    <>
      <TestButton />
      <Routes>
        <Route path="/comptia-a-notes" element={<div>Welcome to the Home page</div>} />
        <Route path ="/comptia-a-notes/unit1" element={<Unit1 />} />
      </Routes>
      <Button>Test Bootstrap Button</Button>
    </>
  )
}

export default App
