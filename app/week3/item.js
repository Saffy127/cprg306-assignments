const Item = ({ name, quantity, category }) => {
    return (
      <li className="flex justify-between border-b py-2">
        <span>{name}</span>
        <span>Quantity: {quantity}</span>
        <span>Category: {category}</span>
      </li>
    );
  };
  
  export default Item;
  