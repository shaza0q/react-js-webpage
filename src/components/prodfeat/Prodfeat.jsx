import React from 'react';
import './prodfeat.css';

const Prodfeat = ({title, text, productimg}) => {
  return (
    <div className='gpt3__prodfeat' >
        <div className='gpt3__prodfeat-img'>
            <img src={productimg} alt={title}/>
        </div>
    
        <div className='gpt3__prodfeat-desc'>
            <div className='gpt3__prodfeat-heading'>
                <h2>{title}</h2>
            </div>
            <div className='gpt3__prodfeat-text'>
                <p>{text}</p>
            </div>
        </div>
    </div>
  )
}

export default Prodfeat;
