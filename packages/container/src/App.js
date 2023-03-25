import React, { lazy, Suspense, useState, useEffect  } from 'react';
import {Router, Route, Switch, Redirect  } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';

import Progress from './components/Progress';
import Header from './components/Header';

const MarketingLazy = lazy(() => import ('./components/MarketingApp'))
const AuthLazy = lazy(() => import ('./components/AuthApp'))
const DashboardLazy = lazy(() => import ('./components/DashboardApp'))

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
});

const history = createBrowserHistory();

export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    
    useEffect(() => {
        if (isSignedIn) {
            history.push('/dashboard');
        }
    }, [isSignedIn]); //run this when the value of isSignedIn changes
    
    return (
        <Router history={history}>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header onSignOut={() => setIsSignedIn(false)} isSignedIn={isSignedIn} />
                    <Suspense fallback={<Progress></Progress>}>
                        <Switch>
                            <Route path="/auth">
                                <AuthLazy onSignIn={() => setIsSignedIn(true)}></AuthLazy>
                            </Route>
                            <Route path="/dashboard">
                                { !isSignedIn && <Redirect to="/"/> }
                                <DashboardLazy/>
                            </Route>
                            <Route path="/" component={MarketingLazy}></Route>
                        </Switch>
                    </Suspense>
                </div>
            </StylesProvider>
        </Router>
    );
};