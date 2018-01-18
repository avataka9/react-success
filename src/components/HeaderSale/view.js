import React from 'react';

export const HeaderSaleView = (props) => {
  return (
    <div className="header__sale">
      Только в {props.month}! Бесплатная доставка по всей России. Оплата при получении.
    </div>
  );
};


