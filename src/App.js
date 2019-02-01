import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createStore, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers/index'
import MainPageContainer from "./containers/MainPageContainer";

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={MainPageContainer} />
            </Switch>
          </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
