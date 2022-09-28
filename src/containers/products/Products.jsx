import React from 'react';
import {Prodfeat} from '../../components'
import {Prodfeat1} from '../../components'
import './products.css';

const pathbase='arrsoon.jpg'


const Products = () => {
    return (
      <div className='gpt3__products' id='products'>
        <div className='gpt3__products-heading'>
          <h1 className='gradient__text'>We have something for everyone!</h1>
        </div>
        <div className='gpt3__products-var'>
          <Prodfeat title='product 1' text='description of product1' productimg={pathbase}/>
          <Prodfeat1 title='product 2' text='description of product2' productimg={pathbase}/>
          <Prodfeat title='product 3' text='description of product3' productimg={pathbase}/>
          <Prodfeat1 title='product 4' text='description of product4' productimg={pathbase}/>
          <Prodfeat title='product 5' text='description of product5' productimg={pathbase}/>
          <Prodfeat1 title='product 6' text='description of product6' productimg={pathbase}/>
        </div>
      </div>
    )
  }

export default Products