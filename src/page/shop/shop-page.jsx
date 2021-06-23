import React from 'react';
import CollectionOverview from "../../components/collections-overview/collection-overview";
import {Route} from "react-router-dom";
import CategoryPage from "../collection/collection";

const ShopPage = ({ match }) => (
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={ CollectionOverview }/>
        <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
    </div>
)

export default ShopPage;
