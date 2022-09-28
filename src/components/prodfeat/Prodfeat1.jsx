import React from 'react';
import './prodfeat1.css';

const Prodfeat1 = ({title, text, productimg}) => {
  return (
    <div className='gpt3__prodfeat1' >
        <div className='gpt3__prodfeat1-img'>
            <img src={productimg} alt={title}/>
        </div>
        <div className='gpt3__prodfeat1-desc'>
            <div className='gpt3__prodfeat1-heading'>
                <h2>{title}</h2>
            </div>
            <div className='gpt3__prodfeat1-text'>
                <p>{text}</p>
            </div>
        </div>
    </div>
  )
}

export default Prodfeat1;
