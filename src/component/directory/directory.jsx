import React from 'react';
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect';
import '../directory/directory.scss'
import MenuItem from '../menu-item/menu-item'

import { selectDirectorySections } from '../../redux/reducers/directory/directory.selectors';

const Directory = ({sections}) => (
    <div className='directory-menu'>
    {
        sections.map(({id,...sectionProps}) =>
            <MenuItem key={id} {...sectionProps}/>
        )
    }
    </div>
)
   
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);