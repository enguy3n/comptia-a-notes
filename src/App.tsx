import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom';

import HeaderNav from './components/HeaderNav';
import Notes from './components/Notes';

import Unit1 from './pages/Unit1';
import Unit2 from './pages/Unit2';
import Unit3 from './pages/Unit3';
import Unit4 from './pages/Unit4';
import Unit5 from './pages/Unit5';
import Unit6 from './pages/Unit6';
import Unit7 from './pages/Unit7';

function App() {

  return (
    <>
      <HeaderNav />

      <Routes>
        <Route path = "/comptia-a-notes" element={<div className="text-content">This is a home page</div>} />
        <Route path = "/comptia-a-notes/unit1" element={<Notes unitNumber={1} title="Role of an IT Specialist" bodyContent={<Unit1 />}/>} />
        <Route path = "/comptia-a-notes/unit2" element={<Notes unitNumber={2} title="Motherboards and Connectors" bodyContent={<Unit2 />}/>} />
        <Route path = "/comptia-a-notes/unit3" element={<Notes unitNumber={3} title="Installing Systen Devices" bodyContent={<Unit3 />}/>} />
        <Route path = "/comptia-a-notes/unit4" element={<Notes unitNumber={4} title="Troubleshooting PC Hardware" bodyContent={<Unit4 />}/>} />
        <Route path = "/comptia-a-notes/unit5" element={<Notes unitNumber={5} title="Comparing Local Networking Hardware" bodyContent={<Unit5 />}/>} />
        <Route path = "/comptia-a-notes/unit6" element={<Notes unitNumber={6} title="Configuring Network Addressing and Internet Connections" bodyContent={<Unit6 />}/>} />
        <Route path = "/comptia-a-notes/unit7" element={<Notes unitNumber={7} title="Supporting Network Services" bodyContent={<Unit7 />}/>} />
      </Routes>
    </>
  )
}

export default App
