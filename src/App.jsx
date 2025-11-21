import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ProjectForm from './pages/ProjectForm'
import ProjectView from './pages/ProjectView'
import Pnf from './pages/Pnf'
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Allproposals from './pages/Allproposals'

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projectform' element={<ProjectForm/>}/>
        <Route path='/projectview/:id/view' element={<ProjectView/>}/>
        <Route path='/allproposals' element={<Allproposals/>}/>
        <Route path='/*' element={<Pnf/>}/>
      </Routes>
    </>
  )
}

export default App
