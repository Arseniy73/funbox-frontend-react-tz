import React, { useState } from 'react'
import List from './List';
import products from './products'
import ProductContext from './ProductContext'

function App() {
  const [items, setProducts] = useState(products)
  console.log(items);

  function chooseItem(id) {
    setProducts(items.map(p => {
      if(p.id === id) {
        p.active = !p.active
        p.hovered = true
      }
      return p
    }))
  }

  function hoverOff(id) {
    setProducts(items.map(p => {
      if(p.id === id) {
        p.hovered = false
      }
      return p
    }))
  }


  return (
    // eslint-disable-next-line
    <ProductContext.Provider value={{items, chooseItem, hoverOff}}>
      <div className="body-inner">
        <div>
          <div className="title">Ты сегодня покормил кота?</div>
          <List />
        </div>
        
      </div>
    </ProductContext.Provider>
  );
}

export default App;
