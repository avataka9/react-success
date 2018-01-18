import React from 'react';
import { NavLink } from 'react-router-dom';


export const FooterNavView = () => {
  return (
    <div className="footer-nav">
      <div className="footer-nav__wraper">
        <div className="footer-nav__group">
          <span>Коллекции</span>
          <NavLink to="/smartphone-collection/" activeClassName="active">Смартфоны</NavLink>
          <NavLink to="/iphone-collection/" activeClassName="active">iPhone X | 8 | 8 Plus by Gresso</NavLink>
          <NavLink to="/phone-collection/" activeClassName="active">Телефоны</NavLink>
          <NavLink to="/case-collection/" activeClassName="active">Титановые чехлы</NavLink>
          <NavLink to="/case-accessories/" activeClassName="active">Аксессуары Gresso</NavLink>
        </div>
        <div className="footer-nav__group">
          <span>Услуги</span>
          <a href="" >Услуги персонализации</a>
          <a href="" >Пользовательское соглашение</a>
          <a href="" >Бесплатная доставка</a>
        </div>
        <div className="footer-nav__group">
          <span>О компании Gresso</span>
          <a href="" >О компании</a>
          <a href="" >Эксклюзивный дизайн</a>
          <a href="" >Производство Gresso</a>
          <a href="" >История Gresso</a>
          <a href="" >Блог</a>
        </div>
        <div className="footer-nav__group">
          <span>Связаться с Gresso</span>
          <a href="" >Контакты</a>
          <a href="" >Адреса бутиков</a>
        </div>
      </div>
    </div>
  );
};