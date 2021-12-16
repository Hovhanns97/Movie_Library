import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import configureStore from "./redux/store"

const renderApp = async (preloadedState) => {
  const store = configureStore(await preloadedState);
  window.state = store.getState;

  render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
      document.getElementById('root')
    );
  }

  renderApp()
