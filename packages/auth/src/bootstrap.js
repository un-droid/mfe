import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

// mount function to start up the app
const mount = (el, { onNavigate, defaultHistory, initialPath}) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });
    onNavigate && history.listen(onNavigate);

    ReactDOM.render (
        <App history={history}></App>, el);
    
    return {
        onParentNavigate({pathname: nextPathname}) {
            const { pathname } = history.location;
            if (pathname !== nextPathname) {
                history.push(nextPathname);
            }
        }
    }
};


// if we are in dev and in isolation, call the mount immediately

if (process.env.NODE_ENV === 'development') {
    console.log('auth');
    const devRoot = document.querySelector('#_auth-dev-root');
    if (devRoot) {
        mount(devRoot, {defaultHistory: createBrowserHistory()});
    }
}

// we are running through container, we need to export the mound function

export {
    mount
};
