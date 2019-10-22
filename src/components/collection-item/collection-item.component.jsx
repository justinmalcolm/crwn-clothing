import React from 'react';

import '../collection-item/collection-item.styles.scss';
//import { url } from 'inspector';

const CollectionItem = ({ id, name, price, imageUrl }) => (
    <div key={id} className='collection-item'>
        <div 
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        >    
        </div>

        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
    </div>
);

export default CollectionItem;