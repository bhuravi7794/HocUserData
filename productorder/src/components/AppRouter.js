import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from 'react-router-redux';

import 'scss/style.scss';

import store from 'utils/store';
import history from 'utils/history';

import List from 'components/List';
import AddUser from 'components/AddUser';
import Cart from 'components/Cart';
import Header from 'components/Header';

class App extends Component {
  render() {
    return (
      <Router
        basename={'/'}>
        <ConnectedRouter
          store={store}
          history={history}>
          <Fragment>
            <Header />
            <div
              className={'container-fluid'}>
              <div
                className={'row'}>
                <div
                  className={'col-md-8 offset-md-2 mt-3'}>
                  <Switch>
                    <Route
                      component={Cart}
                      exact={true}
                      path={'/Cart'}
                    />
                    <Route
                      component={List}
                      exact={true}
                      path={'/Products'}
                    />
                    <Route
                      component={AddUser}
                      exact={true}
                      path={'/AddUser'}
                    />
                    <Route
                      component={Cart}
                      exact={true}
                      path={'/'}
                    />
                  </Switch>
                </div>
              </div>
            </div>
          </Fragment>
        </ConnectedRouter>
      </Router>
    );
  }
}

export default App;