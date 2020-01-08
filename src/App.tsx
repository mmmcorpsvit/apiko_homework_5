// import { hot } from "react-hot-loader";

import React from 'react';
import {Route, Router, Switch} from "react-router-dom";
import {QueryParamProvider} from "use-query-params";

import {decorate, observable} from "mobx";

import {history} from "./history";
import './App.css';
// import NavBar from './components/NavBar/';


// import {NavItem} from './components/NavItem/';
// import {NavItemProps} from "./components/NavBar/types";
import {HomePage} from "./scenes/Home";
import {ShopPage} from "./scenes/Shop";
import {ReviewsPage} from "./scenes/Rewiews";


import NavBar from "./components/NavBar/NavBar";
import NavItem from "./components/NavItem/NavItem";


// import {NavItemProps} from "./components/NavBar/types";

// const MainMenuItems = 'Home';
// observable(MainMenuItems);

export interface INavItem {
    path: string;
    caption: string;
    // chldren?: any;  // not use
    children?: void;
}

const NavBarItems: INavItem[] = [
    {path: '/', caption: 'Home'},
    {path: '/shop', caption: 'Shop'},
    {path: '/reviews', caption: 'Reviews'},
];

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
                            <NavItem url={item.path} name={item.caption} key={key}/>
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
