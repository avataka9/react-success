import React from 'react';

import icon from '../../assets/svg/i-phone.svg'

export const PhoneView = ({place}) => {
  return (
    <div className={`${place}-phone`}>
      <img className={`${place}-phone__icon`} src={icon}  alt="phone-icon"/>
      <div className={`${place}-phone__number`}>8 (499) 372 22 13</div>
      <div className={`${place}-phone__time`}>9:00-21:00 (мск.) | Пн.-Вс.</div>
    </div>
  );
};