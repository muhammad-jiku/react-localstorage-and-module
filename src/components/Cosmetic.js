import React from 'react';
import '../styles/Cosmetic.css';
import { addToDb, removeFromDb, deleteDb } from '../utilities/storage';

function Cosmetic(props) {
  const { _id, name, phone, email, price, cosmeticColor } = props.cosmetic;
  // creating and handling event-handler
  const addToCart = (id) => {
    // adding data to localstorage
    addToDb(id);
  };
  const removeFromCart = (id) => {
    // adding data to localstorage
    removeFromDb(id);
  };
  return (
    <div className="product">
      <h3>Author's Name: {name} </h3>
      <h4>Auhor's Phone: {phone} </h4>
      <h4>Author's email: {email} </h4>
      <h4>Product Code: {cosmeticColor} </h4>
      <h4>Product Price: {price} </h4>
      <button onClick={() => addToCart(_id)}>Add To Cart</button>
      <button onClick={() => removeFromCart(_id)}>Remove From Cart</button>
      <button onClick={deleteDb}>Delete Cart</button>
    </div>
  );
}

export default Cosmetic;
