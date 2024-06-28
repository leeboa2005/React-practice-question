import React, { useState } from 'react';

function ItemList() {
    const [items, setItems] = useState<string[]>([]);
    const [newItem, setNewItem] = useState<string>('');

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewItem(event.target.value);
    };

    const handleAddItem = () => {
        setItems([...items, newItem]);
        setNewItem('');
    };
    return (
        <div>
            <input type="text" value={newItem} onChange={handleInput} />
            <button onClick={handleAddItem}>Add Item</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default ItemList;
