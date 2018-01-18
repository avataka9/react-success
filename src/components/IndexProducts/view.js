import React from 'react';

import image256     from '../../assets/img/indexPage/collection-256x244.jpg';
import image384     from '../../assets/img/indexPage/collection-384x366.jpg';
import image475     from '../../assets/img/indexPage/collection-475x450.jpg';

import image256x2   from '../../assets/img/indexPage/collection-2x-256x244.jpg';
import image384x2   from '../../assets/img/indexPage/collection-2x-384x366.jpg';
import image475x2   from '../../assets/img/indexPage/collection-2x-475x450.jpg';

export const IndexProductsView = () => {
  return (
    <div className="index-page-products">

      <a href="" className="index-page-products__item">
        <div className="index-page-products__title">
          КОЛЛЕКЦИЯ СМАРТФОНОВ GRESSO
        </div>
        <picture>
          <source srcSet={`${image384}, ${image384x2} 2x`} media="(max-width: 380px)"/>
          <source srcSet={`${image475}, ${image475x2} 2x`} media="(max-width: 667px)"/>
          <source srcSet={`${image384}, ${image384x2} 2x`} media="(max-width: 768px)"/>
          <source srcSet={`${image256}, ${image256x2} 2x`} media="(max-width: 1024px)"/>
          <img src={image475} srcSet={image475x2} alt="index-product"/>
        </picture>
        <div className="index-page-products__footer">
          <div className="index-page-products__text">
            Золото 18К. Титановый корпус.<br/>
            ОС Android. Лимитированная коллекция.
          </div>
          <div className="index-page-products__price">
            от 96 000 ₽
          </div>
        </div>
      </a>

      <a href="" className="index-page-products__item">
        <div className="index-page-products__title">
          КОЛЛЕКЦИЯ iPHONE X, 8 И 8 PLUS<br/>
          BY GRESSO
        </div>
        <picture>
          <source srcSet={`${image384}, ${image384x2} 2x`} media="(max-width: 380px)"/>
          <source srcSet={`${image475}, ${image475x2} 2x`} media="(max-width: 667px)"/>
          <source srcSet={`${image384}, ${image384x2} 2x`} media="(max-width: 768px)"/>
          <source srcSet={`${image256}, ${image256x2} 2x`} media="(max-width: 1024px)"/>
          <img src={image475} srcSet={image475x2} alt="index-product"/>
        </picture>
        <div className="index-page-products__footer">
          <div className="index-page-products__text">
            Золото 18К. Титан.<br/>
            Лимитированная коллекция.
          </div>
          <div className="index-page-products__price">
            от 152 000 ₽
          </div>
        </div>
      </a>

      <a href="" className="index-page-products__item">
        <div className="index-page-products__title">КОЛЛЕКЦИЯ КНОПОЧНЫХ<br/>ТЕЛЕФОНОВ GRESSO</div>
        <picture>
          <source srcSet={`${image384}, ${image384x2} 2x`} media="(max-width: 380px)"/>
          <source srcSet={`${image475}, ${image475x2} 2x`} media="(max-width: 667px)"/>
          <source srcSet={`${image384}, ${image384x2} 2x`} media="(max-width: 768px)"/>
          <source srcSet={`${image256}, ${image256x2} 2x`} media="(max-width: 1024px)"/>
          <img src={image475} srcSet={image475x2} alt="index-product"/>
        </picture>
        <div className="index-page-products__footer">
          <div className="index-page-products__text">
            Золото 18К. Титановый корпус. 2 SIM-карты.<br/>
            Лимитированная коллекция.
          </div>
          <div className="index-page-products__price">
            от 112 000 ₽
          </div>
        </div>
      </a>

      <a href="" className="index-page-products__item">
        <div className="index-page-products__title">КОЛЛЕКЦИЯ ТИТАНОВЫХ ЧЕХЛОВ<br/>ДЛЯ iPHONE X, 8 И 8 PLUS</div>
        <picture>
          <source srcSet={`${image384}, ${image384x2} 2x`} media="(max-width: 380px)"/>
          <source srcSet={`${image475}, ${image475x2} 2x`} media="(max-width: 667px)"/>
          <source srcSet={`${image384}, ${image384x2} 2x`} media="(max-width: 768px)"/>
          <source srcSet={`${image256}, ${image256x2} 2x`} media="(max-width: 1024px)"/>
          <img src={image475} srcSet={image475x2} alt="index-product"/>
        </picture>
        <div className="index-page-products__footer">
          <div className="index-page-products__text">
            Золото 18К. Титан. Инновационная конструкция.<br/>
            Лимитированная коллекция.
          </div>
          <div className="index-page-products__price">
            от 29 000 ₽
          </div>
        </div>
      </a>


    </div>
  );
};