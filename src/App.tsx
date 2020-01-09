import React from 'react';
import {Route, Router, Switch} from "react-router-dom";
import {QueryParamProvider} from "use-query-params";

import {decorate, observable} from "mobx";

import {history} from "./history";
import './App.css';

import {HomePage, ReviewsPage, ShopPage} from "./scenes";
import {NavBar, INavItem, NavItem} from "./components";


const NavBarItems: INavItem[] = [
    {path: '/', caption: 'Home'},
    {path: '/shop', caption: 'Shop'},
    {path: '/reviews', caption: 'Reviews'},
];

// https://reach.tech/router/example/animation
const Switches: React.FC = () => {
    return (
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/shop' component={ShopPage}/>
            <Route exact path='/reviews' component={ReviewsPage}/>
        </Switch>)
};

const App: React.FC = () => {
    return (
        <Router history={history}>
            <QueryParamProvider ReactRouterRoute={Route}>
                <div className="App">
                    <NavBar>
                        {NavBarItems.map((item, key) =>
                            <NavItem path={item.path} caption={item.caption} key={key}/>
                        )}
                    </NavBar>
                </div>

                <div className="main">
                    <Switches/>
                </div>
            </QueryParamProvider>
        </Router>
    );
};

// export default hot(App);
export default App;
