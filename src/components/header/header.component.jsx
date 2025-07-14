import React from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "..//..//assets/megaStyle.svg";

import "./header.styles.scss";

// Шапка приложения с логотипом магазина, меню и контактами
const Header = ({ currentUser }) => (
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
    </div>
  </div>
);

export default Header;
