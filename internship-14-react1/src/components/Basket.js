import React from 'react';
import BasketItem from './BasketItem';

const Basket = props => {
    const handleBasketDelete = itemName => {
        props.onRemoveElement(itemName);
    }

    const handleItemCross = itemName => {
        props.onCrossingItem(itemName);
    }
    let elementIndex = 0;
    return(
        props.basket.map( (item, key) => {
            elementIndex++;
            return <BasketItem className="basket" key={key} index={elementIndex} onBasketDelete={handleBasketDelete} onItemCross={handleItemCross} item={item}/>
        })
    ); 
};

export default Basket;