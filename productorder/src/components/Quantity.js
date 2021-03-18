import React, { Component, Fragment } from 'react';

class Quantity extends Component {
  changeQuantity(product, o) {
    this.props.changeQuantity(product.id, o);
  };
  
  render() {
    let { product } = this.props,
      { quantity } = product;
    return (
      <Fragment>
        <button
          onClick={this.changeQuantity.bind(this, product, 'MINUS')}
          className={'btn btn-primary btn-sm'}
          type={'button'}>
          {'-'}
        </button>
        <strong
          className={'mx-2'}>
          {quantity}
        </strong>
        <button
          onClick={this.changeQuantity.bind(this, product, 'ADD')}
          className={'btn btn-primary btn-sm'}
          type={'button'}>
          {'+'}
        </button>
      </Fragment>
    );
  }
}

export default Quantity;