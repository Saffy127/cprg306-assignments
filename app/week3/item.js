const Item = ({ name, quantity, category }) => {
    return (
      <li className="list-item">
        <span className="text-xl font-bold">{name}</span>
        <span className="text-lg"> Buy {quantity} in {category}</span>
      </li>
    );
  };
  
  
  
  export default Item;
  