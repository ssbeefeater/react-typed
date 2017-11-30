import React from 'react';
import {render} from 'react-dom';
import Typed from '../src';

class MyComponent extends React.Component {
    render() {
        return (
            <div>
                <Typed strings={['Here you can find']} typeSpeed={40} backSpeed={50}/>
                <br/>

                <Typed strings={['Search for products', 'Search for categoreis', 'Search for brands']}
                    typeSpeed={40} backSpeed={50} attr="placeholder" loop>
                    <input type="text"/>
                </Typed>
            </div>
        );
    }
}

render(
    <MyComponent/>,
    document.getElementById('app'),
);
