import React from "react";

import Directory from "../../components/directory/directory.component";

import "./homepage.styles.scss";

// Домашняя страница магазина
const HomePage = ({ history }) => (
  <div className="homepage">
    <Directory history={history} />
  </div>
);

export default HomePage;
