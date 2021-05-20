import './App.css';
import HomePage from "./page/homepage/homepage";
import React, {Component} from "react";
import {Switch , Route } from "react-router-dom";
import ShopPage from "./page/shop/shop-page";
import Header from "./components/header/header";
import SignInAndSignUp from "./page/signi-in-and-sign-up/sign-in-and-sign-up";

class App extends Component{
    render() {
        return (
            <>
                <Header/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/shop" component={ShopPage}/>
                    <Route exact path="/signin" component={SignInAndSignUp}/>
                </Switch>
            </>
        );
    }
}

export default App;
