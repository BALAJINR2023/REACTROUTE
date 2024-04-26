import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home';
import FullStackDevelopment from './components/FullStackDevelopment';
import DataScience from './components/DataScience';
import CyberSecurity from './components/CyberSecurity';
import Career from './components/Career';
import NavigationMenu from './NavigationMenu';
import Navbar from './Navbar';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <div>
    <Navbar/>
    <br/>
    <NavigationMenu />
    <div className="blog-container">
    <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/full-stack-development" element={<FullStackDevelopment/>} />
          <Route path="/data-science" element={<DataScience/>} />
          <Route path="/cyber-security" element={<CyberSecurity/>} />
          <Route path="/career" element={<Career/>} />
          <Route path="*" element={<h3 className='dtext'>NO PAGES FOUND PLS CHECK THE URL</h3>}/>
    </Routes>
    </div>
    </div>
    </BrowserRouter>
    </>
  )
}

export default App
