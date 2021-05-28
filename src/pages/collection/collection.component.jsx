import React from 'react'

import { connect } from 'react-redux'

import './collection.styles.scss'

import { selectCollecton } from '../../redux/reducers/shop/shop.selectors'
 
const CollectionPage = ({collection}) => {
    console.log(collection)
    return (
    <div className="collection">
        <h2 className="collection-title">{collection.title.toUpperCase()}</h2>
    </div>
)}

const mapStateToProps = (state,ownProps) => ({

    collection: selectCollecton(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);