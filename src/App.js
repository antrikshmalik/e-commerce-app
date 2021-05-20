import './App.css';
import HomePage from "./page/homepage/homepage";
import React, {Component} from "react";
import {Switch , Route } from "react-router-dom";
import ShopPage from "./page/shop/shop-page";
import Header from "./components/header/header";
import SignInAndSignUp from "./page/signi-in-and-sign-up/sign-in-and-sign-up";
import {auth} from "./firebase/firebase.utils";

class App extends Component{
    constructor(props) {
        super(props);
        this.state ={
            currentUser: null
        }
    }


    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({ currentUser: user });

            console.log(user);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <>
                <Header currentUser={this.state.currentUser}/>
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
