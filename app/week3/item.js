const Item = ({ name, quantity, category }) => {
    return (
      <div className="bg-yellow-300 p-4 m-2 rounded border border-gray-400">
        <li className="list-item">
          <div className="text-xl font-bold">{name}</div>
          <div className="text-lg">Buy {quantity} in {category}</div>
        </li>
      </div>
    );
  };
  
  
  export default Item;
  