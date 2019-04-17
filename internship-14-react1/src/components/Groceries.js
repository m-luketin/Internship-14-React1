import React from 'react';
import GroceryItem from './GroceryItem'

const arrayOfLabels = ['Strawberry', 'Blueberry', 'Orange', 'Banana', 'Apple', 'Carrot', 'Celery', 'Mushroom', 'Green Pepper', 'Eggs', 'Cheese', 'Butter'];

const Groceries = props => {
    const handleAddElement = itemName => {
        props.onAddElement(itemName);
    }
    let elementIndex = 0;
    return(
        arrayOfLabels.map((item, key ) => {
            elementIndex++;  
            return <GroceryItem key={key} index={elementIndex}onPlusClick={handleAddElement} label={item}/>  
        })
    ); 
};

export default Groceries;