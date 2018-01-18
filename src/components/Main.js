import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import { IndexPage } from './IndexPage';
import { CollectionPage } from './CollectionPage';
import { Sidebar   } from './Sidebar';
import { Error404  } from './Error404';


export class Main extends Component {
  render() {
    return (
      <main className="main">
        <Sidebar/>
        <Switch>
          <Route exact path='/' component={IndexPage}/>
          <Route exact path='/smartphone-collection/' component={CollectionPage}/>
          <Route exact path='/iphone-collection/'     component={CollectionPage}/>
          <Route exact path='/phone-collection/'      component={CollectionPage}/>
          <Route exact path='/case-collection/'       component={CollectionPage}/>
          <Route exact path='/case-accessories/'      component={CollectionPage}/>
          <Route component={Error404}/>
        </Switch>
      </main>
    );
  }
}
