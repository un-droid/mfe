import {createApp } from 'vue';
import Dashboard from './components/Dashboard';

// mount function to start up the app
const mount = (el) => {

    const veuApp = createApp(Dashboard);
    veuApp.mount(el);

};


// if we are in dev and in isolation, call the mount immediately

if (process.env.NODE_ENV === 'development') {
    console.log('dashboard');
    const devRoot = document.querySelector('#_dashboard-dev-root');
    if (devRoot) {
        mount(devRoot);
    }
}

// we are running through container, we need to export the mount function

export {
    mount
};
