const Item = ({ name, quantity, category }) => {
    return (
      <li className="list-item">
        {name}, Quantity: {quantity}, Category: {category}
      </li>
    );
  };
  
  export default Item;
  