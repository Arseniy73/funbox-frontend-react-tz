import React, { useContext } from 'react'
import Card from './Card'
import ProductContext from './ProductContext'


export default function List() {
    const {items} = useContext(ProductContext)
    console.log(items);
    return(
        <ul className="list">
            {items.map(product => <Card product={product} key={product.id} />)} 
        </ul>
    )
}