import React from 'react';
import { Feature } from '../../components';
import './cval.css';

const Cval=()=>{
    return(
        <div className='gpt3__cval section__margin' id='cval'>
            <div className='gpt3__cval-box'>
                <div className='gpt3__cval-mista'>
                    <p>Our Mission statement is as follows...</p>
                </div>
                <div className='gpt3__cval-heading'>
                    <h1 className='gradient__text'>
                    Every medical Facilities at your fingertips
                    </h1>
                    <p>Health care, Medoc here</p>
                </div>
                <div className='gpt3__cval__coreval'>
                    <Feature title='value no. 1' text='lorem ipsum jypsum para 1'/>
                    <Feature title='value no. 2' text='lorem ipsum jypsum para 2'/>
                    <Feature title='value no. 3' text='lorem ipsum jypsum para 3'/>
                    <Feature title='value no. 4' text='lorem ipsum jypsum para 4'/>
                </div>
            </div>
        </div>
    )
}

export default Cval;