"use client";
import React, { useState } from 'react';
import Item from './item';
import './app/globals.css'; 
const ItemList = ({ items }) => { // 1. Accept the items prop
  const [sortBy, setSortBy] = useState('name');
  
  // Sort items based on sortBy state
  let sortedItems = [...items]; // Use items prop instead of itemsData
  if (sortBy === 'name') {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === 'category') {
    sortedItems.sort((a, b) => a.category.localeCompare(b.category));
  }

  return (
    <div>
      <button onClick={() => setSortBy('name')} 
              style={{backgroundColor: sortBy === 'name' ? 'lightblue' : 'white'}}>
        Sort by Name
      </button>
      <button onClick={() => setSortBy('category')} 
              style={{backgroundColor: sortBy === 'category' ? 'lightblue' : 'white'}}>
        Sort by Category
      </button>
      <ul>
        {sortedItems.map(item => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
