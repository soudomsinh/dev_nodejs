import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Item from './Item'
import slider from '../Helper/slider.json'

function Example()
{
    return (
        <Carousel>
            {
                slider.map(item => <Item key={item.i} item={item} /> )
            }
        </Carousel>
    )
}

export default Example