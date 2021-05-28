import React from 'react';
import {Route} from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCollections } from '../../redux/reducers/shop/shop.selectors'

import CollectionPreview from '../../component/collection-preview/collection-preview'
import CollectionsOverview from '../../component/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component'


const ShopPage = ({match}) => 
(
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
            
    </div>

)

export default ShopPage;