import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Header/Navbar'
import Section1 from './Component/Section1';
import Section2 from './Component/Section2';
import Section3 from './Component/Section3';
import Section4 from './Component/Section4';
import Section5 from './Component/Section5';
import Section6 from './Component/Section6';
import Section7 from './Component/Section7';
import Section8 from './Component/Section8';
import Section9 from './Component/Section9';
import Section10 from './Component/Section10';
import Footer from './Footer/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 /> 
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Footer />
    </>
  )
}

export default App
