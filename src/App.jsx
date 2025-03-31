import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Landingpage from './Pages/Landingpage/Landingpage'
import About from './Pages/Landingpage/About'
import Products from './Pages/Landingpage/Products'
import Quest from './Pages/Landingpage/Quest'
import Contact from './Pages/Landingpage/Contact'


function App() {


  return (
    <Routes>
      <Route path = "/" element={<Landingpage />}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/product' element={<Products/>}/>
      <Route path='/quest' element={<Quest/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
  )
}

export default App
