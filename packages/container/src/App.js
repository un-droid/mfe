import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';
import AuthApp from './components/AuthApp';

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
});

export default () => {
    return (
    <BrowserRouter>
        <StylesProvider generateClassName={generateClassName}>
            <div>
                <Header/>
                    <Switch>
                        <Route path="/auth" component={AuthApp}></Route>
                        <Route path="/" component={MarketingApp}></Route>
                    </Switch>
                <h3>hi container!!</h3>
            </div>
        </StylesProvider>
    </BrowserRouter>
    );
};