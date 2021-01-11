import React, { useContext } from 'react'
import ProductContext from './ProductContext'

export default function Card({product}) {
    const {chooseItem, hoverOff} = useContext(ProductContext)

    return(
        <li className="body__item">
            <svg width="0" height="0">
                <clipPath id="polygon" >
                    <polygon style={{stroke: "#1698d9", strokeWidth: "5"}} className="polygon" stroke="#1698d9" strokeWidth="5"  points="0 50, 50 0, 320 0, 320 480, 0 480"/>
                    <path d="M0,50 L50,0 L292,0 a20,20 0 0 1 20,20 L312,452 a20,20 0 0 1 -20,20 L20,472 a20,20 0 0 1 -20,-20 L0,50 L50,0" />
                </clipPath>
            </svg>
            <div className={product.none ? "body__card-inner card--none" : "body__card-inner"}>
                <div className={product.active 
                    ? (product.hovered ? "body__card hovered" 
                    : "body__card card--active") 
                    : "body__card"} 
                    onClick={() => chooseItem(product.id)} 
                    onMouseOut={() => hoverOff(product.id)}
                    >
                    <div className="card-container">
                        <div className="card-question">Котэ не одобряет?</div>
                        <div className="card-uptitle">Сказочное заморское яство</div>
                        <div className="card-title">Нямушка</div>
                        <div className="card-subtitle">{product.name}</div>
                        <div className="card-text">{product.pcs} порций<p>{product.present} в подарок {product.pcs > 99 && 'заказчик доволен'}</p></div>
                    </div>
                    <img src="./img/cat.png" alt="cat" className="card-cat" />
                    <div className="card-ellipse">
                        <h3>{product.weight}</h3>
                        <p>кг</p>
                    </div>
                </div>
            </div>
            {product.none ? 
            <div className="body__text" style={{color: "#ff6"}}>Печалька, {product.name} закончился</div>
            :
            (product.active ? 
                <div className="body__text" onMouseOut={() => hoverOff(product.id)}>{product.bodyText}</div>
            :
                <div className="body__text">Чего сидишь? Порадуй котэ,&nbsp; 
                    <span className="item__buy" onClick={() => chooseItem(product.id)}>купи</span>.
                </div>
            )
            }
            
        </li>
    )
}