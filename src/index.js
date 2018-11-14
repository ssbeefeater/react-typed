import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typed from 'typed.js';
import styled from 'styled-components';

const TypedWrapper = styled.span`
    .typed-cursor{
        opacity: 1;
        animation: typedjsBlink 0.7s infinite;
        -webkit-animation: typedjsBlink 0.7s infinite;
        animation: typedjsBlink 0.7s infinite;
    }
    @keyframes typedjsBlink{
        50% { opacity: 0.0; }
    }
    @-webkit-keyframes typedjsBlink{
        0% { opacity: 1; }
        50% { opacity: 0.0;}
        100% { opacity: 1; }
    }
    .typed-fade-out{
        opacity: 0;
        transition: opacity .25s;
        -webkit-animation: 0;
        animation: 0;
    }
`;

class ReactTyped extends Component {
    rootElement = React.createRef()

    componentDidMount() {
        const {
            style,
            typedRef,
            stopped,
            className,
            ...typedOptions
        } = this.props;


        this.constructTyped(typedOptions);

        if (stopped) {
            this.typed.stop();
        }
    }

    constructTyped(options = {}) {
        const {
            style,
            typedRef,
            stopped,
            className,
            ...typedOptions
        } = this.props;

        if (this.typed) {
            this.typed.destroy();
        }

        this.typed = new Typed(this.rootElement.current, Object.assign(typedOptions, options));

        if (this.props.typedRef) {
            this.props.typedRef(this.typed);
        }

        this.typed.reConstruct = (opts) => {
            this.constructTyped(opts);
        };
    }

    shouldComponentUpdate(nextProps) {
        if (this.props !== nextProps) {
            const {
                style,
                typedRef,
                stopped,
                className,
                ...typedOptions
            } = nextProps;

            this.typed.options = Object.assign(this.typed.options, typedOptions);
            const reConstructed = !Object.keys(nextProps).every((key) => {
                if (!this.props[key] && nextProps[key]) {
                    this.constructTyped(nextProps);
                    return false;
                }
                if (this.typed[key]) {
                    this.typed[key] = nextProps[key];
                }
                return true;
            });
            if (!reConstructed && this.props.strings.length !== nextProps.strings.length) {
                this.constructTyped(nextProps);
            }
            return true;
        }
        return false;
    }

    render() {
        const { style, className, children } = this.props;

        let child = <span ref={this.rootElement}/>;

        if (children) {
            child = React.cloneElement(children, {
                ref: this.rootElement,
            });
        }

        return (
            <TypedWrapper
                style={style}
                className={className}
            >
                {child}
            </TypedWrapper>
        );
    }
}

ReactTyped.propTypes = {
    /** styles for the outer element */
    style: PropTypes.object,
    /** class name for the outer element */
    className: PropTypes.string,
    /** the element to wrapp */
    children: PropTypes.object,
    /** typedRef(self: Typed) returns the Typed instance */
    typedRef: PropTypes.func,
    /** initialize in stopped state */
    stopped: PropTypes.bool,
    /** strings to be typed */
    strings: PropTypes.arrayOf(PropTypes.string),
    /**  type speed in milliseconds */
    typeSpeed: PropTypes.number,
    /** time before typing starts in milliseconds */
    startDelay: PropTypes.number,
    /** backspacing speed in milliseconds */
    backSpeed: PropTypes.number,
    /**  only backspace what doesn't match the previous string */
    smartBackspace: PropTypes.bool,
    /** shuffle the strings */
    shuffle: PropTypes.bool,
    /** time before backspacing in milliseconds */
    backDelay: PropTypes.number,
    /** Fade out instead of backspace */
    fadeOut: PropTypes.bool,
    /** css class for fade animation */
    fadeOutClass: PropTypes.string,
    /** Fade out delay in milliseconds */
    fadeOutDelay: PropTypes.number,
    /** loop the strings */
    loop: PropTypes.bool,
    /** amount of loops */
    loopCount: PropTypes.number,
    /** show cursor */
    showCursor: PropTypes.bool,
    /** character for cursor */
    cursorChar: PropTypes.string,
    /** insert CSS for cursor and fadeOut into HTML */
    autoInsertCss: PropTypes.bool,
    /** attribute for typing Ex: input placeholder, value, or just HTML text */
    attr: PropTypes.string,
    /**  bind to focus and blur if el is text input */
    bindInputFocusEvents: PropTypes.bool,
    /**  'html' or 'null' for plaintext */
    contentType: PropTypes.oneOf(['html', '']),
    /** onComplete(self: Typed) All typing is complete */
    onComplete: PropTypes.func,
    /** preStringTyped(arrayPos: number, self: Typed) Before each string is typed */
    preStringTyped: PropTypes.func,
    /** onStringTyped(arrayPos: number, self: Typed) After each string is typed */
    onStringTyped: PropTypes.func,
    /** onLastStringBackspaced(self: Typed) During looping, after last string is typed */
    onLastStringBackspaced: PropTypes.func,
    /** onTypingPaused(arrayPos: number, self: Typed) Typing has been stopped */
    onTypingPaused: PropTypes.func,
    /** onTypingResumed(arrayPos: number, self: Typed) Typing has been started after being stopped */
    onTypingResumed: PropTypes.func,
    /** onReset(self: Typed) After reset */
    onReset: PropTypes.func,
    /** onStop(arrayPos: number, self: Typed)    After stop */
    onStop: PropTypes.func,
    /** onStart(arrayPos: number, self: Typed) After start */
    onStart: PropTypes.func,
    /** onDestroy(self: Typed) After destroy */
    onDestroy: PropTypes.func,
};

export default ReactTyped;
