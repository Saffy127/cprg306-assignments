const Item = ({ name, quantity, category }) => {
    return (
      <li className="list-item">
        <span className="text-xl font-bold">{name}</span>
        <span className="text-lg">Quantity: {quantity}</span>
        <span className="text-lg">Category: {category}</span>
      </li>
    );
  };
  
  
  export default Item;
  