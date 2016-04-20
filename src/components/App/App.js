import React from 'react';
import ReactCreditCardForm from '../ReactCreditCardForm/ReactCreditCardForm';
import UserForm from '../UserForm/UserForm';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import store from '../../store.js';

const handleSubmit = (user) => {
  // actions.submit('user', somePromise)
  console.log("App.js user", user)
}

const handleCCSubmit = (cc) => {
  // actions.submit('cc', somePromise)
  console.log("App.js cc", cc)
}

const App = () => (
  <Provider store={ store }>
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <ReactCreditCardForm handleSubmit={(cc) => handleCCSubmit(cc)}/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <UserForm handleSubmit={(user) => handleSubmit(user)}/>
        </div>
      </div>
    </div>
  </Provider>
);

module.exports = App;
