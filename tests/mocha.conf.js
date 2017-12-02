require('babel-register')();
import chai from 'chai';
import sinon from 'sinon';
import { JSDOM } from 'jsdom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from 'chai-enzyme';

Enzyme.configure({ adapter: new Adapter() });
const { window } = new JSDOM('<!doctype html><html><body></body></html>');

function copyProps(src, target) {
    const props = Object.getOwnPropertyNames(src)
        .filter(prop => typeof target[prop] === 'undefined')
        .reduce((result, prop) => ({
            ...result,
            [prop]: Object.getOwnPropertyDescriptor(src, prop),
        }), {});
    Object.defineProperties(target, props);
}


global.document = window.document;
global.window = window;

global.enzyme = Enzyme;
global.expect = chai.expect;
global.chai = chai;
global.sinon = sinon;
global.navigator = {
    userAgent: 'node.js',
};
copyProps(window, global);

before(() => {
    sinon.stub(console, 'error').callsFake((warning) => {
        throw new Error(warning);
    });
});

after(() => { console.error.restore(); });

// ************Chai plugins****************
chai.use(chaiEnzyme());
// ************/Chai plugins****************
