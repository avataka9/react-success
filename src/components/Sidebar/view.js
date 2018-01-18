import React from 'react';

export const SidebarView = ({isOpen}) => {
  return (
    <div className={isOpen ? "sidebar sidebar--open" : "sidebar"}>
      <ul>
        <li><a href="/smartphone-collection/">СМАРТФОНЫ</a></li>

        <li><a href="/iphone-collection/">iPHONE BY GRESSO</a></li>

        <li><a href="/phone-collection/">ТЕЛЕФОНЫ</a></li>

        <li><a href="/case-collection/">ТИТАНОВЫЕ ЧЕХЛЫ ДЛЯ iPHONE</a></li>

        <li><a href="/case-accessories/">АКСЕССУАРЫ</a></li>

      </ul>
    </div>
  );
};
