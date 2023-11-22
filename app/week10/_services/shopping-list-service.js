"use client";
import React, { useState, useEffect } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import { getItems, addItem } from './_services/shopping-list-service'; 

function Page() {
    const [items, setItems] = useState([]);

    const userUid = 'some-user-uid'; 

    async function loadItems() {
        const fetchedItems = await getItems(userUid);
        setItems(fetchedItems);
    }

    useEffect(() => {
        loadItems();
    }, []);

    async function handleAddItem(newItem) {
        const newItemId = await addItem(userUid, newItem);
        setItems(prevItems => [...prevItems, { ...newItem, id: newItemId }]);
    }

    return (
        <main>
            <h1>Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />
        </main>
    );
}

export default Page;
