"use strict";(self.webpackChunkreact_typed=self.webpackChunkreact_typed||[]).push([[576],{"./stories/ReactTyped.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BasicUsage:()=>BasicUsage,CustomComponent:()=>CustomComponent,InputPlaceholder:()=>InputPlaceholder,Stopped:()=>Stopped,WithInput:()=>WithInput,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ReactTyped_stories});var react=__webpack_require__("./node_modules/react/index.js"),input=__webpack_require__("./node_modules/antd/es/input/index.js"),typed_module=__webpack_require__("./node_modules/typed.js/dist/typed.module.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_without_holes(arr){if(Array.isArray(arr))return _array_like_to_array(arr)}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function _non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _to_consumable_array(arr){return _array_without_holes(arr)||_iterable_to_array(arr)||_unsupported_iterable_to_array(arr)||_non_iterable_spread()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var ReactTyped=(0,react.memo)(function(_param){var style=_param.style,className=_param.className,typedRef=_param.typedRef,transformRef=_param.parseRef,stopped=_param.stopped,children=_param.children,typedOptions=_object_without_properties(_param,["style","className","typedRef","parseRef","stopped","children"]),rootElement=(0,react.useRef)(null),shouldUpdateArgs=(0,react.useMemo)(function(){var _typedOptions_strings;return _to_consumable_array(Object.values(typedOptions).filter(function(v){return"boolean"==typeof v||"number"==typeof v||"number"==typeof v})).concat([null===(_typedOptions_strings=typedOptions.strings)||void 0===_typedOptions_strings?void 0:_typedOptions_strings.join(",")])},[typedOptions]);(0,react.useEffect)(function(){var element=transformRef&&transformRef(rootElement)||rootElement.current,typed=new typed_module.Z(element,_object_spread({},typedOptions));return typedRef&&typed&&typedRef(typed),stopped&&(null==typed||typed.stop()),function(){typed.destroy()}},shouldUpdateArgs);var child=children?react.cloneElement(children,{ref:rootElement}):react.createElement("span",{style:style,ref:rootElement});return react.createElement("span",{style:style,className:className,"data-testid":"react-typed"},child)});try{ReactTyped.displayName="ReactTyped",ReactTyped.__docgenInfo={description:"",displayName:"ReactTyped",props:{strings:{defaultValue:{value:"[\n'These are the default values...',\n'You know what you should do?',\n'Use your own!',\n'Have a great day!',\n]"},description:"strings to be typed",name:"strings",required:!1,type:{name:"string[]"}},stringsElement:{defaultValue:{value:"null"},description:"ID or instance of HTML element of element containing string children",name:"stringsElement",required:!1,type:{name:"string | Element"}},typeSpeed:{defaultValue:{value:"0"},description:"type speed in milliseconds",name:"typeSpeed",required:!1,type:{name:"number"}},startDelay:{defaultValue:{value:"0"},description:"time before typing starts in milliseconds",name:"startDelay",required:!1,type:{name:"number"}},backSpeed:{defaultValue:{value:"0"},description:"backspacing speed in milliseconds",name:"backSpeed",required:!1,type:{name:"number"}},smartBackspace:{defaultValue:{value:"true"},description:"only backspace what doesn't match the previous string",name:"smartBackspace",required:!1,type:{name:"boolean"}},shuffle:{defaultValue:{value:"true"},description:"shuffle the strings",name:"shuffle",required:!1,type:{name:"boolean"}},backDelay:{defaultValue:{value:"700"},description:"time before backspacing in milliseconds",name:"backDelay",required:!1,type:{name:"number"}},fadeOut:{defaultValue:{value:"false"},description:"Fade out instead of backspace",name:"fadeOut",required:!1,type:{name:"boolean"}},fadeOutClass:{defaultValue:{value:"typed-fade-out"},description:"css class for fade animation",name:"fadeOutClass",required:!1,type:{name:"string"}},fadeOutDelay:{defaultValue:{value:"500"},description:"Fade out delay in milliseconds",name:"fadeOutDelay",required:!1,type:{name:"number"}},loop:{defaultValue:{value:"false"},description:"loop strings",name:"loop",required:!1,type:{name:"boolean"}},loopCount:{defaultValue:{value:"Infinity"},description:"amount of loops",name:"loopCount",required:!1,type:{name:"number"}},showCursor:{defaultValue:{value:"true"},description:"show cursor",name:"showCursor",required:!1,type:{name:"boolean"}},cursorChar:{defaultValue:{value:"|"},description:"character for cursor",name:"cursorChar",required:!1,type:{name:"string"}},autoInsertCss:{defaultValue:{value:"true"},description:"insert CSS for cursor and fadeOut into HTML",name:"autoInsertCss",required:!1,type:{name:"boolean"}},attr:{defaultValue:{value:"null"},description:"attribute for typing Ex: input placeholder, value, or just HTML text",name:"attr",required:!1,type:{name:"string"}},bindInputFocusEvents:{defaultValue:{value:"false"},description:"bind to focus and blur if el is text input",name:"bindInputFocusEvents",required:!1,type:{name:"boolean"}},contentType:{defaultValue:{value:"html"},description:"'html' or 'null' for plaintext",name:"contentType",required:!1,type:{name:"string"}},onBegin:{defaultValue:null,description:"Before it begins typing the first string",name:"onBegin",required:!1,type:{name:"((self: Typed) => void)"}},onComplete:{defaultValue:null,description:"All typing is complete",name:"onComplete",required:!1,type:{name:"((self: Typed) => void)"}},preStringTyped:{defaultValue:null,description:"Before each string is typed",name:"preStringTyped",required:!1,type:{name:"((arrayPos: number, self: Typed) => void)"}},onStringTyped:{defaultValue:null,description:"After each string is typed",name:"onStringTyped",required:!1,type:{name:"((arrayPos: number, self: Typed) => void)"}},onLastStringBackspaced:{defaultValue:null,description:"During looping, after last string is typed",name:"onLastStringBackspaced",required:!1,type:{name:"((self: Typed) => void)"}},onTypingPaused:{defaultValue:null,description:"Typing has been stopped",name:"onTypingPaused",required:!1,type:{name:"((arrayPos: number, self: Typed) => void)"}},onTypingResumed:{defaultValue:null,description:"Typing has been started after being stopped",name:"onTypingResumed",required:!1,type:{name:"((arrayPos: number, self: Typed) => void)"}},onReset:{defaultValue:null,description:"After reset",name:"onReset",required:!1,type:{name:"((self: Typed) => void)"}},onStop:{defaultValue:null,description:"After stop",name:"onStop",required:!1,type:{name:"((arrayPos: number, self: Typed) => void)"}},onStart:{defaultValue:null,description:"After start",name:"onStart",required:!1,type:{name:"((arrayPos: number, self: Typed) => void)"}},onDestroy:{defaultValue:null,description:"After destroy",name:"onDestroy",required:!1,type:{name:"((self: Typed) => void)"}},style:{defaultValue:null,description:"Styles for the outer element",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"class name for the outer element",name:"className",required:!1,type:{name:"string"}},typedRef:{defaultValue:null,description:"callback that returns the typed instance",name:"typedRef",required:!1,type:{name:"((typed: Typed) => void)"}},stopped:{defaultValue:{value:"false"},description:"if true will be initialized in stopped state",name:"stopped",required:!1,type:{name:"boolean"}},parseRef:{defaultValue:{value:"(ref)=>ref.current"},description:"In some custom component dom element is not in the ref.current property.\nie an Input by antd the element is in input property ( ref.current.input )\nyou can use this function to get the element from the ref",name:"parseRef",required:!1,type:{name:"((ref: RefObject<any>) => HTMLElement)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#ReactTyped"]={docgenInfo:ReactTyped.__docgenInfo,name:"ReactTyped",path:"src/index.tsx#ReactTyped"})}catch(__react_docgen_typescript_loader_error){}function ReactTyped_stories_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function ReactTyped_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function ReactTyped_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){ReactTyped_stories_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||ReactTyped_stories_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function ReactTyped_stories_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return ReactTyped_stories_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ReactTyped_stories_array_like_to_array(o,minLen)}}var ReactTyped_stories_ReactTyped=function(props){var _React_useState=_sliced_to_array(react.useState(),2),typedInstance=_React_useState[0],setTypedInstance=_React_useState[1];return react.createElement("div",null,react.createElement(ReactTyped,_object_spread_props(ReactTyped_stories_object_spread({},props),{typedRef:props.typedRef||setTypedInstance})),!props.typedRef&&react.createElement("div",null,react.createElement("br",null),react.createElement("button",{onClick:function(){return null==typedInstance?void 0:typedInstance.reset()}},"Reset"),react.createElement("button",{onClick:function(){return null==typedInstance?void 0:typedInstance.start()}},"Start"),react.createElement("button",{onClick:function(){return null==typedInstance?void 0:typedInstance.stop()}},"Stop"),react.createElement("button",{onClick:function(){return null==typedInstance?void 0:typedInstance.toggle()}},"Toggle"),react.createElement("button",{onClick:function(){return null==typedInstance?void 0:typedInstance.destroy()}},"Destroy"))||null)};let ReactTyped_stories={title:"React Typed",component:ReactTyped,tags:["autodocs"],args:{strings:["welcome to react-typed",'This is a react component that wraps up the <a href="https://github.com/mattboldt/typed.js/">typed.js</a>','If you like the project add a star in <a href="https://github.com/mattboldt/typed.js/">typed.js</a> and <a href="https://github.com/mattboldt/typed.js/">react-typed</a>'],typeSpeed:50,backSpeed:50},argTypes:{strings:{control:!1},className:{control:!1},typedRef:{control:!1},children:{control:!1}}};var BasicUsage={render:function(props){return react.createElement(ReactTyped_stories_ReactTyped,props)}},WithInput={render:function(props){return react.createElement(ReactTyped_stories_ReactTyped,_object_spread_props(ReactTyped_stories_object_spread({},props),{strings:["Search by name","Search by type","Search by description"]}),react.createElement("input",{type:"text",style:{width:300}}))}},InputPlaceholder={render:function(props){return react.createElement(ReactTyped_stories_ReactTyped,_object_spread_props(ReactTyped_stories_object_spread({},props),{attr:"placeholder",loop:!1,strings:["Add a name here"]}),react.createElement("input",{type:"text",style:{width:300}}))}},Stopped={render:function(props){var _React_useState=_sliced_to_array(react.useState(),2),typedInstance=_React_useState[0],setTypedInstance=_React_useState[1];return react.createElement("div",null,react.createElement(ReactTyped_stories_ReactTyped,_object_spread_props(ReactTyped_stories_object_spread({},props),{typedRef:setTypedInstance,stopped:!0,strings:["Search by name","Search by type","Search by description"]})),react.createElement("div",null,react.createElement("br",null),react.createElement("button",{onClick:function(){return null==typedInstance?void 0:typedInstance.reset()}},"Reset"),react.createElement("button",{onClick:function(){return null==typedInstance?void 0:typedInstance.start()}},"Start"),react.createElement("button",{onClick:function(){return null==typedInstance?void 0:typedInstance.stop()}},"Stop"),react.createElement("button",{onClick:function(){return null==typedInstance?void 0:typedInstance.toggle()}},"Toggle"),react.createElement("button",{onClick:function(){return null==typedInstance?void 0:typedInstance.destroy()}},"Destroy")))}},CustomComponent={render:function(props){return react.createElement(ReactTyped_stories_ReactTyped,_object_spread_props(ReactTyped_stories_object_spread({},props),{attr:"placeholder",loop:!1,strings:["Add a name here"],parseRef:function(ref){return ref.current.input}}),react.createElement(input.Z,{type:"text",style:{width:300}}))}};BasicUsage.parameters={...BasicUsage.parameters,docs:{...BasicUsage.parameters?.docs,source:{originalSource:"{\n  render: props => <ReactTyped {...props} />\n}",...BasicUsage.parameters?.docs?.source}}},WithInput.parameters={...WithInput.parameters,docs:{...WithInput.parameters?.docs,source:{originalSource:'{\n  render: props => <ReactTyped {...props} strings={["Search by name", "Search by type", "Search by description"]}>\n      <input type="text" style={{\n      width: 300\n    }} />\n    </ReactTyped>\n}',...WithInput.parameters?.docs?.source}}},InputPlaceholder.parameters={...InputPlaceholder.parameters,docs:{...InputPlaceholder.parameters?.docs,source:{originalSource:'{\n  render: props => <ReactTyped {...props} attr="placeholder" loop={false} strings={["Add a name here"]}>\n      <input type="text" style={{\n      width: 300\n    }} />\n    </ReactTyped>\n}',...InputPlaceholder.parameters?.docs?.source}}},Stopped.parameters={...Stopped.parameters,docs:{...Stopped.parameters?.docs,source:{originalSource:'{\n  render: props => {\n    const [typedInstance, setTypedInstance] = React.useState<Typed>();\n    return <div>\n        <ReactTyped {...props} typedRef={setTypedInstance} stopped strings={["Search by name", "Search by type", "Search by description"]} />\n        <div>\n          <br />\n          <button onClick={() => typedInstance?.reset()}>Reset</button>\n          <button onClick={() => typedInstance?.start()}>Start</button>\n          <button onClick={() => typedInstance?.stop()}>Stop</button>\n          <button onClick={() => typedInstance?.toggle()}>Toggle</button>\n          <button onClick={() => typedInstance?.destroy()}>Destroy</button>\n        </div>\n      </div>;\n  }\n}',...Stopped.parameters?.docs?.source}}},CustomComponent.parameters={...CustomComponent.parameters,docs:{...CustomComponent.parameters?.docs,source:{originalSource:'{\n  render: props => <ReactTyped {...props} attr="placeholder" loop={false} strings={["Add a name here"]} parseRef={ref => ref.current.input}>\n      <Input type="text" style={{\n      width: 300\n    }} />\n    </ReactTyped>\n}',...CustomComponent.parameters?.docs?.source}}};let __namedExportsOrder=["BasicUsage","WithInput","InputPlaceholder","Stopped","CustomComponent"]}}]);