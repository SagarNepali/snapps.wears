import React from 'react';
import SHOP_DATA from '../shop/shop.data'
import CollectionPreview from '../../component/collection-preview/collection-preview'

class ShopPage extends React.Component{
    constructor(props){

        super(props);

        this.state = {
            collections : SHOP_DATA
        }
    }

    render(){
        const {collections} = this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map(({id,...collectionsProps})=>(
                        <CollectionPreview key={id} {...collectionsProps}/>   
                    ))
                }
                 
            </div>
        )
    }
}

export default ShopPage;