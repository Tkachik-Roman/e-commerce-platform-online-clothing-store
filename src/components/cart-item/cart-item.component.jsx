import React from "react";

import "./cart-item.styles.scss";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  const totalPrice = quantity * price;
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ₽{price} = ₽{totalPrice}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
