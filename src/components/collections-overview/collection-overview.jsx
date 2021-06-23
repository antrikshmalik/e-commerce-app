import React from 'react';
import "./collection-overview.scss";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import CollectionPreview from "../preview-collection/collection-preview";
import {selectCollections} from "../../redux/shop/shop-selector";

const CollectionOverview = ({collections}) => {
  return (
      <div className="collections-collection">
        {
          collections.map(({id, ...otherCollectionProps}) => (
              <CollectionPreview key = {id} {...otherCollectionProps} />
          ))
        }
      </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps)(CollectionOverview);
