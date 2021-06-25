import React from 'react';
import "./collection-overview.scss";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import CollectionPreview from "../preview-collection/collection-preview";
import {selectCollectionsForPreview} from "../../redux/shop/shop-selector";

const CollectionOverview = ({collections}) => {
  console.log("Ipsum lorem", collections);
  return (
      <div className="collections-overview">
        {
          collections.map(({id, ...otherCollectionProps}) => (
              <CollectionPreview key = {id} {...otherCollectionProps} />
          ))
        }
      </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview);
