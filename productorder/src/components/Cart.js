import React, { Component } from 'react';
import {connect} from "react-redux";

import { changeQuantity } from 'actions/products/';
import Quantity from 'components/Quantity';

class CartItem extends Component {
  render() {
    let { product } = this.props,
      { id, name, price, quantity } = product;
    return(
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{`Rs. ${price}/-`}</td>
        <td
          className={'text-center'}>
            <Quantity
              product={product}
              changeQuantity={this.props.changeQuantity}
            />
        </td>
        <td>
          {`Rs. ${(price * quantity)}/-`}
        </td>
      </tr>
    );
  };
};

class Cart extends Component {
  render() {
    let { products } = this.props;
    products = products.filter((p)=> { return p.quantity; });
    let total = 0;
    for (let p of products) {
      total += (p.price * p.quantity);
    };
    return (
      <table
        className={'table table-bordered mb-3'}>
        <thead>
          <tr>
            <th>{'#Id'}</th>
            <th>{'Name'}</th>
            <th>{'Price'}</th>
            <th>{'Quantity'}</th>
            <th>{'Total'}</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, k)=>
            <CartItem
              key={k}
              product={product}
              changeQuantity={this.props.changeQuantity}
            />
          )}
          {products.length ?
            <tr>
              <th
                className={'text-right'}
                colSpan={'4'}>
                {'Total:'}
              </th>
              <th>
                {`Rs. ${total}/-`}
              </th>
            </tr>
            :
            <tr>
              <th
                className={'text-center'}
                colSpan={'5'}>
                {'Cart is Empty!'}
              </th>
            </tr>
          }
        </tbody>
      </table>
    );
  }
}

export default connect((state) => {
  return {
      products: state.products
    }
  },
  {
    changeQuantity
  }
)(Cart);