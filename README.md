# react-typed

### A react wrapper for [typed.js](https://github.com/mattboldt/typed.js)

### react-typed v2 changelog

- Re-wright in typescript
- Support for react 18
- option to start animation only when the element is visible
- new property parseRef for supporting custom components that handles ref differently (see last example)
- update docs with latest storybook version

---

[Installation](#installation)

[Docs & Examples](http://ssbeefeater.github.io/react-typed)

---

#### Installation

Install with [yarn](https://yarnpkg.com) or [npm](https://www.npmjs.com/)

```sh
yarn add react-typed
        #or
npm install react-typed --save
```

---

#### Examples

```javascript
import { ReactTyped } from "react-typed";

const MyComponent = () => (
  <div>
    <ReactTyped strings={["Here you can find anything"]} typeSpeed={40} />
    <br />

    <ReactTyped
      strings={[
        "Search for products",
        "Search for categories",
        "Search for brands",
      ]}
      typeSpeed={40}
      backSpeed={50}
      attr="placeholder"
      loop
    >
      <input type="text" />
    </ReactTyped>
  </div>
);
```


###### Using typed start, stop, toggle, destroy, reset functions

```javascript
import { ReactTyped,Typed } from "react-typed";

const MyComponent  {
  const [typed,setTyped] = React.useState<Typed| undefined>()

  return (
      <div>
        <Button onClick={typed.start()}>Start</Button>
        <Button onClick={typed.stop()}>Stop</Button>
        <Button onClick={typed.toggle()}>Toggle</Button>
        <Button onClick={typed.destroy()}>Destroy</Button>
        <Button onClick={typed.reset()}>Reset</Button>
        <ReactTyped
          typedRef={setTyped}
          strings={["Here you can find anything"]}
          typeSpeed={40}
        />
      </div>
    )
}
```

###### Start only if is visible in the dom

```javascript
import { ReactTyped } from "react-typed";

const MyComponent = () => (
  <ReactTyped
    startWhenVisible
    strings={[
      "If <strong>startWhenVisible</strong> is <strong>true</strong>, will start when is visible in the dom",
    ]}
    typeSpeed={40}
  />
);
```

#### Using parseRef for custom components

```javascript
import { ReactTyped } from "react-typed";
import { Input } from "antd";

const MyComponent = () => (
  <ReactTyped parseRef={(ref) => ref.current.input} attr="placeholder" strings={["Add a name here"]} typeSpeed={40} >
    <Input>
  </ReactTyped>
);
```
