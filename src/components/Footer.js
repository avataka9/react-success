import React, { Component } from 'react';

import { FooterPress    } from './FooterPress';
import { FooterNav      } from './FooterNav';
import { FooterSocial   } from './FooterSocial';
import { Phone          } from './Phone';



export class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Phone place="footer"/>
        <FooterPress />
        <FooterNav />
        <FooterSocial />
      </footer>
    );
  }
}
