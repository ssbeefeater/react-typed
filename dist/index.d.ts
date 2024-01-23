import React from "react";
import Typed from "typed.js";
export interface ReactTypedProps {
    /**
     * strings to be typed
     * @default [
      'These are the default values...',
      'You know what you should do?',
      'Use your own!',
      'Have a great day!',
    ]
     * */
    strings?: string[];
    /**
     * ID or instance of HTML element of element containing string children
     * @default null
     */
    stringsElement?: string | Element;
    /**
     * type speed in milliseconds
     * @default 0
     */
    typeSpeed?: number;
    /**
     * time before typing starts in milliseconds
     * @default 0
     */
    startDelay?: number;
    /**
     * backspacing speed in milliseconds
     * @default 0
     */
    backSpeed?: number;
    /**
     * only backspace what doesn't match the previous string
     * @default true
     */
    smartBackspace?: boolean;
    /**
     * shuffle the strings
     * @default true
     */
    shuffle?: boolean;
    /**
     * time before backspacing in milliseconds
     * @default 700
     */
    backDelay?: number;
    /**
     * Fade out instead of backspace
     * @default false
     */
    fadeOut?: boolean;
    /**
     * css class for fade animation
     * @default typed-fade-out
     */
    fadeOutClass?: string;
    /**
     * Fade out delay in milliseconds
     * @default 500
     */
    fadeOutDelay?: number;
    /**
     * loop strings
     * @default false
     */
    loop?: boolean;
    /**
     * amount of loops
     * @default Infinity
     */
    loopCount?: number;
    /**
     * show cursor
     * @default true
     */
    showCursor?: boolean;
    /**
     * character for cursor
     * @default |
     */
    cursorChar?: string;
    /**
     * insert CSS for cursor and fadeOut into HTML
     * @default true
     */
    autoInsertCss?: boolean;
    /**
     * attribute for typing Ex: input placeholder, value, or just HTML text
     * @default null
     */
    attr?: string;
    /**
     * bind to focus and blur if el is text input
     * @default false
     */
    bindInputFocusEvents?: boolean;
    /**
     * 'html' or 'null' for plaintext
     * @default html
     */
    contentType?: string;
    /**
     * Before it begins typing the first string
     */
    onBegin?(self: Typed): void;
    /**
     * All typing is complete
     */
    onComplete?(self: Typed): void;
    /**
     * Before each string is typed
     */
    preStringTyped?(arrayPos: number, self: Typed): void;
    /**
     * After each string is typed
     */
    onStringTyped?(arrayPos: number, self: Typed): void;
    /**
     * During looping, after last string is typed
     */
    onLastStringBackspaced?(self: Typed): void;
    /**
     * Typing has been stopped
     */
    onTypingPaused?(arrayPos: number, self: Typed): void;
    /**
     * Typing has been started after being stopped
     */
    onTypingResumed?(arrayPos: number, self: Typed): void;
    /**
     * After reset
     */
    onReset?(self: Typed): void;
    /**
     * After stop
     */
    onStop?(arrayPos: number, self: Typed): void;
    /**
     * After start
     */
    onStart?(arrayPos: number, self: Typed): void;
    /**
     * After destroy
     */
    onDestroy?(self: Typed): void;
    /**
     * Styles for the outer element
     * */
    style?: React.CSSProperties;
    /**
     * class name for the outer element
     * */
    className?: string;
    /**
     * callback that returns the typed instance
     * */
    typedRef?: (typed: Typed) => void;
    /**
     * if true will be initialized in stopped state
     * @default false
     * */
    stopped?: boolean;
    /**
     * In some custom component dom element is not in the ref.current property.
     * ie an Input by antd the element is in input property ( ref.current.input )
     * you can use this function to get the element from the ref
     * @default (ref)=>ref.current
     * */
    parseRef?: (ref: React.RefObject<any>) => HTMLElement;
    /**
     * if true will start only when the element is visible
     * @default false
     * */
    startWhenVisible?: boolean;
    children?: React.ReactElement;
}
export declare const ReactTyped: React.FC<ReactTypedProps>;
export { Typed };
