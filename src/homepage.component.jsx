import React from 'react';

import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <div className='directory-menu'>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>ГОЛОВНЫЕ УБОРЫ</h1>
          <span className='subtitle'>КУПИТЬ СЕЙЧАС</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>КУРТКИ</h1>
          <span className='subtitle'>КУПИТЬ СЕЙЧАС</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>КРОССОВКИ</h1>
          <span className='subtitle'>КУПИТЬ СЕЙЧАС</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>ЖЕНСКОЕ</h1>
          <span className='subtitle'>КУПИТЬ СЕЙЧАС</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>МУЖСКОЕ</h1>
          <span className='subtitle'>КУПИТЬ СЕЙЧАС</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;