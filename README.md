# react-typed

### A react wrapper for [typed.js](https://github.com/mattboldt/typed.js)

---


[Installation](#installation)

[Examples](#examples)

[Docs](http://www.mattboldt.com/typed.js/docs/)

---

#### Installation

Install with [yarn](https://yarnpkg.com) or [npm](https://www.npmjs.com/)

```sh
yarn add react-typed
        #or
npm install react-typed --save
```
---
#### EXAMPLES

```javascript
import React,{ Component } from 'react';
import { render } from 'react-dom';
import Typed from 'react-typed';

class MyComponent extends Component {
    render() {
        return (
            <div>
                <Typed 
                    strings={['Here you can find anything']} 
                    typeSpeed={40} 
                />
                <br/>

                <Typed 
                strings={[
                    'Search for products',
                    'Search for categoreis',
                    'Search for brands']}
                    typeSpeed={40}
                    backSpeed={50} 
                    attr="placeholder"
                    loop >
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

```
