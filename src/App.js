import './App.css';
import HomePage from "./page/homepage/homepage";
import React  from "react";
import {Switch , Route, Redirect } from "react-router-dom";
import ShopPage from "./page/shop/shop-page";
import Header from "./components/header/header";
import SignInAndSignUp from "./page/sign-in-and-sign-up/sign-in-and-sign-up";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/user/user-actions";
import {selectCurrentUser} from "./redux/user/user-selector";
import {createStructuredSelector} from "reselect";
import Checkout from "./page/checkout/checkout";
// import {selectCollectionsForPreview} from "./redux/shop/shop-selector";

class App extends React.Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
        // const { setCurrentUser, collectionsArray } = this.props;
        const { setCurrentUser } = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    });
                });
            }

            setCurrentUser(userAuth);
            // addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items})));
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/checkout' component={Checkout} />
                    <Route path='/shop' component={ShopPage} />
                    <Route
                        exact
                        path='/signin'
                        render={() =>
                            this.props.currentUser ? (
                                <Redirect to='/' />
                            ) : (
                                <SignInAndSignUp />
                            )
                        }
                    />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    // collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
