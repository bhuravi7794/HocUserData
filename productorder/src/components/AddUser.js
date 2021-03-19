import React, { Component } from 'react';
import {connect} from "react-redux";
import ReactDOM from 'react-dom';
import ReactTable from 'react-table-6'
import { updateProduct, addProduct } from 'actions/products/';
import { updateEdit } from 'actions/edit/';
import 'react-table-6/react-table.css'


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
      userList,
  
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
        "first_name":firstName,
        "last_name":lastName,
         "age":Math.floor((new Date() - new Date(doB).getTime()) / 3.15576e+10),
         "quli":quali,
         "mark":mark
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
    const columns = [{  
      Header: 'First Name',  
      accessor: 'first_name'  
     },{  
      Header: 'Last Name',  
      accessor: 'last_name'  
     },{  
      Header: 'Age',  
      accessor: 'age'  
     },{  
      Header: 'Qualification',  
      accessor: 'quli'  
     },{  
      Header: 'Marks',  
      accessor: 'mark'  
     }
    ]  
  
      
    let { firstName, lastName, doB,quali,mark,userList} = this.state,
      { edit } = this.props;
      var listItem=userList.map((userList,k)=>
      <span></span>
       );
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
    <ReactTable  
            data={userList}  
            columns={columns}  
            defaultPageSize = {2}  
            pageSizeOptions = {[2,4, 6]}  
        
            getTrProps={(state, rowInfo, column)  => {

              if(rowInfo!=undefined){
              return {
                style: {
                  background: rowInfo.row.age > 30 ? 'green' : 'yellow'
                }
              }
            }

            else{
              return {

              }
            }

            }}

         />  
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