import './App.css';
import HomePage from "./page/homepage/homepage";
import React, {Component} from "react";
import {Switch , Route } from "react-router-dom";
import ShopPage from "./page/shop/shop-page";
import Header from "./components/header/header";

class App extends Component{
    render() {
        return (
            <>
                <Header/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/shop" component={ShopPage}/>
                </Switch>
            </>
        );
    }
}

export default App;
