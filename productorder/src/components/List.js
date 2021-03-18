import React, { Component } from 'react';
import {connect} from "react-redux";

import { changeQuantity } from 'actions/products/';
import Add from './Add';

class ListItem extends Component {
  changeQuantity(product) {
    this.props.changeQuantity(product.id, 'ADD');
  };
  
  render() {
    let { product } = this.props;
    return(
      <li
        className={`list-group-item`}>
        <span
          className={'mt-1 float-left'}>
          {product.name}
          <strong
            className={'ml-2'}>
            {`Rs. ${product.price}/- Only`}
          </strong>
        </span>
        <button
          disabled={product.quantity}
          onClick={this.changeQuantity.bind(this, product)}
          className={'btn btn-primary btn-sm float-right'}
          type={'button'}>
          {'Add to Cart'}
        </button>
      </li>
    );
  };
};

class List extends Component {
  render() {
    let { products } = this.props;
    return (
      <div>
        <Add/>
      <ul
        className={'list-group mb-3'}>
        {products.map((product, k)=>
          <ListItem
            key={k}
            product={product}
            changeQuantity={this.props.changeQuantity}
          />
        )}
        {!products.length && <li className={'list-group-item font-weight-bold text-center'}>{'No Product Added!'}</li>}
      </ul>
      </div>
    );
  }
}

export default connect((state) => {
    return {
      products: state.products
    }
  },
  {
    changeQuantity,
  }
)(List);