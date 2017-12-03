import 'raf/polyfill';
import React from 'react';
import Typed from '../src';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

const {shallow} = Enzyme;

class Example extends React.Component {
    render() {
        return (
            <div>Example</div>
        )
    }
}

describe('<Example />',
    () => {
    it('Renders correct',
        () => {
        const component = shallow(<Example/>);
        expect(component).toHaveLength(1);
    }
    )
}
)