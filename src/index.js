import React from 'react';
import ReactDOM from 'react-dom'; 
import AmazonasApp from './AmazonasApp';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import  'bootstrap/dist/css/bootstrap.min.css'


ReactDOM.render(
  <Provider store={store} >
    <AmazonasApp/>
  </Provider>,
  document.getElementById('root')
);


