import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'

import Logo from "../public/assets/1.png"
import LogoLarge from '../public/assets/LogoLarge.svg'

export default function Home() {
  return (
    <div>
      <Navbar img={Logo} logo_large={LogoLarge} />
      <About />
    </div>
  );
}
