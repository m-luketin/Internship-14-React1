import React from 'react';

const ListItem = props => {
    return <div className={props.index%2 ? 'basket--item__odd' : 'basket--item__even'} style={props.item.isCrossed ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}><span className="basket--minus" onClick={() => props.onBasketDelete(props.item.label)}>-</span><span className="basket--count">{props.item.count}</span><span onClick={() => props.onItemCross(props.item.label)}>{props.item.label}</span></div>;
};

export default ListItem;