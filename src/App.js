import './App.css';
import HomePage from "./page/homepage/homepage";
import React, {Component} from "react";
import {Switch , Route } from "react-router-dom";
import ShopPage from "./page/shop/shop-page";

class App extends Component{
    render() {
        return (
            <>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/shop" component={ShopPage}/>
                </Switch>
            </>
        );

    }
}

export default App;
