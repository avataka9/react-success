import React from 'react';

import { IndexBanner     } from '../IndexBanner';
import { IndexProducts   } from '../IndexProducts';

export const IndexPageView = (props) => {
  return (
    <div className="index-page">
      <IndexBanner />
      <IndexProducts />
    </div>
  );
};


