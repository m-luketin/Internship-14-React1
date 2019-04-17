import React from 'react';

const ListItem = props => {
    return <div className={props.index%2 ? 'groceries--item__odd' : 'groceries--item__even'}><span className="groceries--plus" onClick={() => props.onPlusClick(props.label)}>+</span>{props.label}</div>;
};

export default ListItem;