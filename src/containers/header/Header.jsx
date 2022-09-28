import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className='gpt3__header section_padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Medoc a complete station for all your medical problems</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero deserunt suscipit laudantium voluptate maxime alias maiores dolores error dicta quas eius blanditiis quaerat repellendus praesentium vel, reprehenderit hic rerum nihil.</p>
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Enter email Address'></input>
          <button type='button'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Header
