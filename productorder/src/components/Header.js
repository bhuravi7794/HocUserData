import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";

class Header extends Component {
  render() {
    let { products } = this.props;
    return (
      <nav
        className={'navbar navbar-expand-lg navbar-light bg-light'}>
        <Link
          to={'/'}
          className={'navbar-brand'}>
          {'Hello, React!'}
        </Link>
        <div
          className={'collapse navbar-collapse'}>
          <ul
            className={'navbar-nav mr-auto'}>
              <li
              className={'nav-item'}>
              <Link
                to={'/AddUser'}
                className={'nav-link'}>
                {'Add User'}
              </Link>
            </li>
            <li
              className={'nav-item'}>
              <Link
                to={'/Products'}
                className={'nav-link'}>
                {'Products'}
              </Link>
            </li>
            <li
              className={'nav-item'}>
              <Link
                to={'/Cart'}
                className={'nav-link'}>
                {`Cart (${products.filter((p)=> { return p.quantity; }).length})`}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
};

export default connect((state)=> {
  return {
    products: state.products
  };
})(Header);