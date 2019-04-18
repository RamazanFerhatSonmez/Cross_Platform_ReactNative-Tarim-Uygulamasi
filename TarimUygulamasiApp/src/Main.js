import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';
import { Provider } from 'react-redux';
const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
class Main extends Component {

    render() {
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}
export default Main;