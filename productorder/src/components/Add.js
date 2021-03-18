import React, { Component } from 'react';
import {connect} from "react-redux";
import ReactDOM from 'react-dom';

import { updateProduct, addProduct } from 'actions/products/';
import { updateEdit } from 'actions/edit/';

class Add extends Component {
  constructor(props) {
    super(props);
    let name = '',
      price = '';
    let { edit } = props;
    if (edit) {
      name = edit.name;
      price = edit.price;
    }
    this.state = {
      name,
      price
    };
  };



  onChangeForm(f, { target }) {
    this.setState({
      [f]: target.value
    });
  };

  onAdd(e) {
    e.preventDefault();
    let { name, price } = this.state,
      { edit } = this.props;
    if (!name || !price) {
      alert('Product Name and Price are required!');
    }
    if (edit) {
      this.props.updateProduct({
        id: edit.id,
        name, price
      });
    } else {
      this.props.onAdd({
        name,
        price,
        quantity: 0
      });
    }
    this.setState({
      name: '',
      price: ''
    });
    ReactDOM.findDOMNode(this.refs.name).focus();
  };

  render() {
    let { name, price } = this.state,
      { edit } = this.props;
    return (
      <form
        onSubmit={this.onAdd.bind(this)}>
        <div
          className={'form-row'}>

          <div
            className={'form-group col-md-5'}>
            <input
              ref={'name'}
              autoFocus
              value={name}
              onChange={this.onChangeForm.bind(this, 'name')}
              className={'form-control'}
              type={'text'}
              placeholder={'Product Name ..'}
            />
          </div>

          <div
            className={'form-group col-md-5'}>
            <input
              onChange={this.onChangeForm.bind(this, 'price')}
              value={price}
              className={'form-control'}
              type={'number'}
              placeholder={'Product Price ..'}
            />
          </div>

          <div
            className={'form-group col-md-2'}>
            <button
              className={'btn btn-primary btn-block'}
              type={'submit'}>
              {edit ? 'Update' : 'Add'}
            </button>
          </div>

        </div>
      </form>
    );
  }
}

export default connect((state)=> {
    return {
      edit: state.edit
    };
  },
  {
    updateProduct,
    onAdd: addProduct,
    onEdit: updateEdit
  }
)(Add);