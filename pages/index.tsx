import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'

import Logo from "../public/assets/1.png"
import LogoLarge from '../public/assets/LogoLarge.svg'
import Mesh from '../public/assets/Mesh.svg';

export default function Home() {
  return (
    <div className="">
      <Navbar img={Logo} />
      <Banner logo_large={LogoLarge} />
      <About mesh={Mesh} />
    </div>
  );
}
