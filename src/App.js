import './App.css';
import HomePage from "./page/homepage/homepage";
import React, {Component} from "react";
import {Switch , Route } from "react-router-dom";
import ShopPage from "./page/shop/shop-page";
import Header from "./components/header/header";
import SignInAndSignUp from "./page/sign-in-and-sign-up/sign-in-and-sign-up";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";

class App extends Component{
    constructor(props) {
        super(props);
        this.state ={
            currentUser: null
        }
    }


    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if(userAuth){
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapshot => {
                    this.setState({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    })
                })
            }
            else
                this.setState({currentUser: userAuth});
        });
    }

    componentWillUnmount() {
        // noinspection JSValidateTypes
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
