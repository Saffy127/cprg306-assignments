const Item = ({ name, quantity, category }) => {
    return (
      <div className="bg-yellow-300 p-4 m-2 rounded border-2 border-gray-400">
        <ul className="list-none">
          <li className="list-item">
            <div className="text-xl font-bold">{name}</div>
            <div className="text-lg">Buy {quantity} in {category}</div>
          </li>
        </ul>
      </div>
    );
  };
   
  export default Item;
  