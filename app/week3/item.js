const Item = ({ name, quantity, category }) => {
    return (
      <div className="bg-white p-4 m-2 rounded border">
        <li className="list-item">
          <span className="text-xl font-bold">{name}</span>
          <span className="text-lg"> Buy {quantity} in {category}</span>
        </li>
      </div>
    );
  };
  
  
  
  export default Item;
  