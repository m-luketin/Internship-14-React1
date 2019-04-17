import React from 'react';

const ListItem = props => {
    return <div><span onClick={() => props.onPlusClick(props.label)}>+</span>{props.label}</div>;
};

export default ListItem;