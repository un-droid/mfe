import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header'

export default () => {
    return (
    <BrowserRouter>
        <div>
            <Header/>
            <MarketingApp />
            <h3>hi container!!</h3>
        </div>
    </BrowserRouter>
    );
};