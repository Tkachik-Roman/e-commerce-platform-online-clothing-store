import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import { ReactComponent as Logo } from "..//..//assets/megaStyle.svg";

import "./header.styles.scss";

// Шапка приложения с логотипом магазина и меню c коллекцией одежды, контактами, входом/выходом, корзиной
const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        КОЛЛЕКЦИИ ОДЕЖДЫ
      </Link>
      <Link className="option" to="/shop">
        КОНТАКТЫ
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          ВЫЙТИ
        </div>
      ) : (
        <Link className="option" to="/signin">
          ВОЙТИ
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
