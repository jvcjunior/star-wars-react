import React from 'react';


const ShoppingList = (props) => {

    const listItems = props.items.map((item) =>
        <li key={item.name}>{item.name}</li>
    );

    return (
        <div>

        </div>
    );
}

export default ShoppingList;