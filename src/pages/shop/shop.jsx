import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCollections } from '../../redux/reducers/shop/shop.selectors'

import CollectionPreview from '../../component/collection-preview/collection-preview'
import CollectionsOverview from '../../component/collections-overview/collections-overview.component';


const ShopPage = () => (
    <div className='shop-page'>
        <CollectionsOverview />
            
    </div>

)

export default ShopPage;