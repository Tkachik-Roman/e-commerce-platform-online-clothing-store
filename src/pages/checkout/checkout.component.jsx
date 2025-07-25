import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Изделие</span>
      </div>
      <div className="header-block">
        <span>Описание</span>
      </div>
      <div className="header-block">
        <span>Количество</span>
      </div>
      <div className="header-block">
        <span>Цена 1 шт.</span>
      </div>
      <div className="header-block">
        <span>Итого</span>
      </div>
      <div className="header-block">
        <span>Удалить</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItems.id} cartItem={cartItem} />
    ))}
    <div className="total">
      <span>Всего к оплате: ₽ {total}</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
