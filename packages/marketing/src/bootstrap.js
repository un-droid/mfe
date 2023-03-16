import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// mount function to start up the app
const mount = (el) => {
    ReactDOM.render (
        <App></App>,
        el
    );
};


// if we are in dev and in isolation, call the mount immediately

if (process.env.NODE_ENV === 'development') {
    console.log('marketing');
    const devRoot = document.querySelector('#_merketing-dev-root');
    if (devRoot) {
        mount(devRoot);
    }
}

// we are running through container, we need to export the mound function

export {
    mount
};
