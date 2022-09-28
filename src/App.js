import React from 'react';
import {Footer,Header,Blog,Cval,Products} from './containers';
import {Navbar} from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
        
      <Cval/>
          
      <Products/> 
        
      <Blog/>  

      <Footer/> 
        
    </div>
  )
}

export default App
