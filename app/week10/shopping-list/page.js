"use client";
import React, { useState } from 'react';

function Page() {
    const [items, setItems] = useState(itemsData);

    function handleAddItem(newItem) {
        setItems(prevItems => [...prevItems, newItem]);
    }

    return (
        <main>
            <h1>Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />
        </main>
    );
}

