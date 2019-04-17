import React from 'react';
import BasketItem from './BasketItem';



const Basket = props => {
    const handleBasketDelete = itemName => {
        props.onRemoveElement(itemName);
    }
    
    return(
        props.basket.map( (item, key) => {
            return <BasketItem key={key} onBasketDelete={handleBasketDelete} item={item}/>
        })
    ); 
};

export default Basket;