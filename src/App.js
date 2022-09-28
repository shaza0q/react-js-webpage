import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import {Footer,Header,Blog,Cval,Products} from './containers';
import {Navbar} from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Parallax pages={5}>

        <ParallaxLayer offset={0} speed={1}>
          <div className='gradient__bg'>
            <Navbar/>
            <Header/>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
          <Cval/>
        </ParallaxLayer>

        <ParallaxLayer offset={2}>
          <Products/> 
        </ParallaxLayer>

        <ParallaxLayer offset={3}>
          <Blog/>
        </ParallaxLayer>

        <ParallaxLayer offset={4}>
          <Footer/> 
        </ParallaxLayer>
        
      </Parallax>
    </div>
  )
}

export default App
