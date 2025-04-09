import { Routes, Route } from 'react-router-dom';
import './App.css';
import Landingpage from './Pages/Landingpage/Landingpage';
import About from './Pages/Landingpage/About';
import Products from './Pages/Landingpage/Products';
import Quest from './Pages/Landingpage/Quest';
import Contact from './Pages/Landingpage/Contact';
import Login from './Pages/Auth/Login';
import Signup from './Pages/Auth/Signup';
import UserDashboard from './Pages/User/UserDashboard';
import Admin from './Pages/Admin/Admin';
import Purcahaseform from './components/Purcahaseform';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Products />} />
      <Route path="/quest" element={<Quest />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/purchase" element={<Purcahaseform/>}/>
      <Route path="/user" element={<UserDashboard />} />
      
      {/* Admin Routes */}
      <Route path="admin/*" element={<Admin />}/>
      
    </Routes>
  );
}

export default App;