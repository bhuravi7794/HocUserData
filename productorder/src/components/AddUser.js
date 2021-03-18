import React, { Component } from 'react';
import {connect} from "react-redux";
import ReactDOM from 'react-dom';

import { updateProduct, addProduct } from 'actions/products/';
import { updateEdit } from 'actions/edit/';

class AddUser extends Component {
  constructor(props) {
    super(props);
    let firstName = '',
      lastName = '',
      doB='',
      quali='',
      mark='',
      userList=[];
    let { edit } = props;
    if (edit) {
    }
    this.state = {
      firstName,
      lastName,
      doB,
      quali,
      mark,
      userList
    };
  };



  onChangeForm(f, { target }) {
    this.setState({
      [f]: target.value
    });
  };

  onAdd(e) {
    e.preventDefault();
    let { firstName, lastName, doB,quali,mark,userList} = this.state,
      { edit } = this.props;
      var date= new Date(doB);
    if (!firstName || !lastName) {
      alert('First Name and Last Name are required!');
    }else{
    var data={
        firstName,
        lastName,
         doB:new Date().getFullYear()-date.getFullYear(),
         quali,
         mark
    }
    userList.push(data);
    this.setState({
      firstName :'',
      lastName : '',
      doB:'',
      quali:'',
      mark:'',
      userList:userList
    });
  }
  ReactDOM.findDOMNode(this.refs.name).focus();
  };

  render() {
      
    let { firstName, lastName, doB,quali,mark,userList} = this.state,
      { edit } = this.props;
      var listItem=userList.map((userList,k)=>
        <li >
            {k+1}
          {userList.firstName}
          {userList.lastName}
          {userList.doB}
          {userList.quali}
          {userList.mark}
        </li>   );
    return (
        <div>
      <form className={'row-group'}
        onSubmit={this.onAdd.bind(this)}>
        <div>

          <div
            className={'form-group'}>
            <input
              ref={'name'}
              autoFocus
              value={firstName}
              onChange={this.onChangeForm.bind(this, 'firstName')}
              className={'form-control'}
              type={'text'}
              placeholder={'First Name'}
            />
          </div>

          <div
            className={'form-group'}>
            <input
              onChange={this.onChangeForm.bind(this, 'lastName')}
              value={lastName}
              className={'form-control'}
              type={'text'}
              placeholder={'Last Name'}
            />
          </div>
          <div
            className={'form-group'}>
            <input
              onChange={this.onChangeForm.bind(this, 'doB')}
              value={doB}
              className={'form-control'}
              type={'date'}
              placeholder={'DoB'}
            />
          </div>
          <div
            className={'form-group'}>
            <input
              onChange={this.onChangeForm.bind(this, 'quali')}
              value={quali}
              className={'form-control'}
              type={'text'}
              placeholder={'Qualification'}
            />
          </div>
          <div
            className={'form-group'}>
            <input
              onChange={this.onChangeForm.bind(this, 'mark')}
              value={mark}
              className={'form-control'}
              type={'number'}
              placeholder={'Mark'}
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
      <ul
      className={'list-group mb-3'}>
      {listItem}
      {!userList.length && <li className={'list-group-item font-weight-bold text-center'}>{'No Data!'}</li>}
    </ul>
    </div>
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
)(AddUser);