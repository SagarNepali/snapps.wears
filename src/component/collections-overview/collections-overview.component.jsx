import React from 'react';

import { createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'

import { selectCollections } from '../../redux/reducers/shop/shop.selectors'

import CollectionPreview from '../collection-preview/collection-preview'

import './collections-overview.styles.scss'

const CollectionsOverview = ({collections}) => (
    <div className="collections-overview">
        {
            collections.map(({id,...collectionsProps})=>(
                <CollectionPreview key={id} {...collectionsProps}/>   
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview) ;
