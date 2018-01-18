import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import {Provider} from 'react-redux';
import {configureStore} from './store';

import {Header} from './components/Header';
import {Main}   from './components/Main';
import {Footer} from './components/Footer';
import {Blog} from './components/Blog';

let menu = [
  {
    group: 'collections',
    content: [
      {
        link: '/smartphone-collection',
        label: 'СМАРТФОНЫ',
        leftMenu: 'false',
        topMenu: 'true',
        number: '1',
        content: [
          {
            link: '/regal',
            label: 'GRESSO REGAL',
            leftMenu: 'false',
            topMenu: 'false',
            number: ''
          }, {
            link: '/gresso-russia-smartphone',
            label: 'GRESSO REGAL РОССИЯ',
            leftMenu: 'false',
            topMenu: 'false',
            number: ''
          }
        ]
      }, {
        link: '/iphone-collection',
        label: 'iPHONE BY GRESSO',
        leftMenu: 'false',
        topMenu: 'true',
        number: '2',
        content: [
          {
            link: '/gresso-blackwood',
            label: 'КОЛЛЕКЦИЯ BLACKWOOD iPhone X | 8 | 8 Plus',
            leftMenu: 'false',
            topMenu: 'false',
            number: ''
          }, {
            link: '/iphone-8-diva',
            label: 'КОЛЛЕКЦИЯ DIVA iPhone X | 8',
            leftMenu: 'false',
            topMenu: 'false',
            number: ''
          }, {
            link: '/iphone-8-by-gresso',
            label: 'КОЛЛЕКЦИЯ TITANIUM iPhone X | 8 | 8 Plus',
            leftMenu: 'false',
            topMenu: 'false',
            number: ''
          }, {
            link: '/gresso-russia-iphone',
            label: 'КОЛЛЕКЦИЯ РОССИЯ iPhone X | 8 | 8 Plus',
            leftMenu: 'false',
            topMenu: 'false',
            number: ''
          }
        ]
      }, {
        link: '/phone-collection',
        label: 'ТЕЛЕФОН',
        leftMenu: 'false',
        topMenu: 'true',
        number: '3',
        content: [
          {
            link: '/gresso-3310',
            label: 'GRESSO 3310',
            leftMenu: 'false',
            topMenu: 'false',
            number: ''
          }, {
            link: '/gresso-meridian',
            label: 'GRESSO MERIDIAN',
            leftMenu: 'false',
            topMenu: 'false',
            number: ''
          }, {
            link: '/gresso-russia-meridian',
            label: 'GRESSO MERIDIAN РОССИЯ',
            leftMenu: 'false',
            topMenu: 'false',
            number: ''
          }, {
            link: '/gresso-meridian-pravoslavie',
            label: 'GRESSO MERIDIAN ПРАВОСЛАВИЕ',
            leftMenu: 'false',
            topMenu: 'false',
            number: ''
          }
        ]
      }, {
        link: '/case-collection',
        label: 'ТИТАНОВЫЕ ЧЕХЛЫ ДЛЯ iPHONE',
        leftMenu: 'false',
        topMenu: 'true',
        number: '4',
        content: [
          {
            link: '/magnum',
            label: 'ТИТАНОВЫЙ ЧЕХОЛ ДЛЯ iPHONE X | 8 | 8 PLUS MAGNUM',
            leftMenu: 'false',
            topMenu: 'false',
            number: ''
          }
        ]
      }, {
        link: '/accessories',
        label: 'АКСЕССУАРЫ',
        leftMenu: 'false',
        topMenu: 'true',
        number: '5',
        content: [
          {
            link: '/dock-station',
            label: 'DOCK-СТАНЦИЯ',
            leftMenu: 'false',
            topMenu: 'false',
            number: ''
          }, {
            link: '/accessories-cover',
            label: 'КОЖАНЫЕ ЧЕХЛЫ',
            leftMenu: 'false',
            topMenu: 'false',
            number: ''
          }, {
            link: '/accessories-glass',
            label: 'ЗАЩИТНЫЕ СТЕКЛА',
            leftMenu: 'false',
            topMenu: 'false',
            number: ''
          }, {
            link: '/accessories-charger',
            label: 'ЗАРЯДНЫЕ УСТРОЙСТВА',
            leftMenu: 'false',
            topMenu: 'false',
            number: ''
          }
        ]
      }
    ]
  }, {
    group: 'services',
    content: [
      {
        link: '/present_ideas',
        label: 'Услуги персонализации',
        leftMenu: 'true',
        topMenu: 'false',
        number: '2',
        content: [
          {
            link: '/exclusive_gifts',
            label: 'ИНДИВИДУАЛЬНЫЕ ПОДАРКИ',
            leftMenu: 'false',
            topMenu: 'false',
            number: ''
          }, {
            link: '/corporate_gifts',
            label: 'КОРПОРАТИВНЫЕ ПОДАРКИ',
            leftMenu: 'false',
            topMenu: 'false',
            number: ''
          }
        ]
      }, {
        link: '/user-agreement',
        label: 'Пользовательское соглашение',
        leftMenu: 'false',
        topMenu: 'false',
        number: ''
      }, {
        link: '/free_delivery',
        label: 'Бесплатная доставка',
        leftMenu: 'true',
        topMenu: 'false',
        number: '3'
      }
    ]
  }, {
    group: 'about',
    content: [
      {
        link: '/about-company',
        label: 'О компании',
        leftMenu: 'true',
        topMenu: 'false',
        number: '1'
      }, {
        link: '/about-design',
        label: 'Эксклюзивный дизайн',
        leftMenu: 'false',
        topMenu: 'false',
        number: ''
      }, {
        link: '/about-production',
        label: 'Производство Gresso',
        leftMenu: 'false',
        topMenu: 'false',
        number: ''
      }, {
        link: '/our-history',
        label: 'История Gresso',
        leftMenu: 'false',
        topMenu: 'false',
        number: ''
      }, {
        link: '/blog',
        label: 'Блог',
        leftMenu: 'false',
        topMenu: 'false',
        number: ''
      }
    ]
  }, {
    group: 'contacts',
    content: [
      {
        link: '/contacts',
        label: 'Контакты',
        leftMenu: 'true',
        topMenu: 'false',
        number: '5',
        content: [
          {
            link: '/requisites',
            label: 'Платежные реквизиты'
          },
          {
            link: '/terms',
            label: 'Условия договора оферты'
          },
          {
            link: '/pay',
            label: 'Оплата по счету'
          },
          {
            link: '/press',
            label: 'Раздел для прессы'
          }
        ]
      }, {
        link: '/boutiques',
        label: 'Адреса бутиков',
        leftMenu: 'true',
        topMenu: 'false',
        number: '4'
      }
    ]
  }
];

const store = configureStore();

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Switch>
          <Redirect from="/old" to="/"/>
          <Route path='/blog' component={Blog}/>
          <Route path='/' render={(props) => (
            <React.Fragment>
              <Header menu={menu}/>
              <Main    />
              <Footer  />
            </React.Fragment>
          )}/>
        </Switch>
      </Provider>
    );
  }
}

