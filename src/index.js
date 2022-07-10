import React, {StrictMode} from 'react';
import { createRoot } from "react-dom/client";
import "@babel/polyfill";
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from "react-redux";

import reducerQuote from './reducers/reducers';
import { App } from './components/App/App';
import rootSaga from './sagas/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducerQuote,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function render() {
    root.render(
        <StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
        </StrictMode>
    );
}

render()
store.subscribe(render)