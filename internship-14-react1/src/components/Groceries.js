import React from 'react';
import GroceryItem from './GroceryItem'

const arrayOfLabels = ['Strawberry', 'Blueberry', 'Orange', 'Banana', 'Apple', 'Carrot', 'Celery', 'Mushroom', 'Green Pepper', 'Eggs', 'Cheese', 'Butter'];

const Groceries = props => {
    const handleAddElement = itemName => {
        props.onAddElement(itemName);
    }

    return(
        arrayOfLabels.map((item, key ) => {
            return <GroceryItem key={key} onPlusClick={handleAddElement} label={item}/>    
        })
    ); 
};

export default Groceries;