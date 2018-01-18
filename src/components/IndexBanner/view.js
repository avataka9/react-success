import React from 'react';
import {Link} from 'react-router-dom';


import image1920   from '../../assets/img/indexPage/index-1920x700.jpg';
import image1440   from '../../assets/img/indexPage/index-1440x521.jpg';
import image1024   from '../../assets/img/indexPage/index-1024x521.jpg';
import image768    from '../../assets/img/indexPage/index-768x521.jpg';
import image667    from '../../assets/img/indexPage/index-667x521.jpg';
import image375    from '../../assets/img/indexPage/index-375x521.jpg';

import image1920x2 from '../../assets/img/indexPage/index-2x-1920x700.jpg';
import image1440x2 from '../../assets/img/indexPage/index-2x-1440x521.jpg';
import image1024x2 from '../../assets/img/indexPage/index-2x-1024x521.jpg';
import image768x2  from '../../assets/img/indexPage/index-2x-768x521.jpg';
import image667x2  from '../../assets/img/indexPage/index-2x-667x521.jpg';
import image375x2  from '../../assets/img/indexPage/index-2x-375x521.jpg';

export const IndexBannerView = () => {
  return (
    <div className="index-page-banner">
      <Link to="/iphone-collection/gresso-blackwood/" >
        <picture>
          <source srcSet={`${image375},  ${image375x2}  2x`} media="(max-width: 375px)"/>
          <source srcSet={`${image667},  ${image667x2}  2x`} media="(max-width: 640px)"/>
          <source srcSet={`${image768},  ${image768x2}  2x`} media="(max-width: 768px)"/>
          <source srcSet={`${image1024}, ${image1024x2} 2x`} media="(max-width: 1024px)"/>
          <source srcSet={`${image1440}, ${image1440x2} 2x`} media="(max-width: 1440px)"/>
          <img src={image1920} srcSet={image1920x2} alt="main-banner"/>
        </picture>
        <div className="index-page-banner__container">
          <div className="index-page-banner__pre-title">iPHONE X | 8 | 8 PLUS</div>
          <div className="index-page-banner__title">Новая коллекция</div>
          <div className="index-page-banner__sub-title">уже в продаже</div>
          <div className="index-page-banner__text">
            <p>200-летнее черное дерево.</p>
            <p>Золото 18 карат. Титан.</p>
            <p>Лимитированная коллекция.</p>
          </div>
        </div>
      </Link>
    </div>
  );
};


