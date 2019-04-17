import React from 'react';

const ListItem = props => {
    return <div><span onClick={() => props.onBasketDelete(props.item.label)}>-</span><span>{props.item.count}</span>{props.item.label}</div>;
};

export default ListItem;