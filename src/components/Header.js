import React, { Component } from 'react';

import { HeaderSale      } from './HeaderSale';
import { HeaderHamburger } from './HeaderHamburger';
import { HeaderLogo      } from './HeaderLogo';
import { Phone           } from './Phone';
import { HeaderNav       } from './HeaderNav';

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <HeaderSale />
        <div className="header__wraper">
          <Phone place="header"/>
          <HeaderLogo />
          <HeaderHamburger />
        </div>
        <HeaderNav />
      </header>
    );
  }
}
