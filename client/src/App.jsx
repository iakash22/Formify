import { useEffect, useState } from 'react';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import ForgotPassword from './components/auth/FogotPassword'
import { Route, Routes } from 'react-router-dom';
import { mode } from './utils/Storage';

import './App.css'
function App() {
  const [dark, setDark] = useState(mode === 'light' ? true : false);
  const [menu, setMenu] = useState(false);

  return (
    <div className={!dark ? 'dark text-white' : 'text-black'}>
      <Navbar setDark={setDark} dark={dark} setMenu={setMenu} />
      {menu && <Sidebar setMenu={setMenu} menu={menu} />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SignIn dark={dark} />} />
        <Route path='/signup' element={<SignUp dark={dark} />} />
        <Route path='/forgot-password' element={<ForgotPassword dark={dark} />} />
      </Routes>
    </div>
  )
}

export default App
