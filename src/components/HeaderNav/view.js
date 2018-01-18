import React from 'react';
import { NavLink } from 'react-router-dom';

export const HeaderNavView = () => {
  return (
    <div className="header-nav">
      <ul>
        <li><NavLink to="/smartphone-collection/" activeClassName="active">СМАРТФОНЫ</NavLink></li>

        <li><NavLink to="/iphone-collection/" activeClassName="active">iPHONE BY GRESSO</NavLink></li>

        <li><NavLink to="/phone-collection/" activeClassName="active">ТЕЛЕФОНЫ</NavLink></li>

        <li><NavLink to="/case-collection/" activeClassName="active">ТИТАНОВЫЕ ЧЕХЛЫ ДЛЯ iPHONE</NavLink></li>

        <li><NavLink to="/case-accessories/" activeClassName="active">АКСЕССУАРЫ</NavLink></li>

      </ul>
    </div>
  );
};