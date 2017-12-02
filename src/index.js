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
    componentDidMount() {
        const {
            style,
            typedRef,
            stopped,
            className,
            ...typedOptions
        } = this.props;

        this.typed = new Typed(this.rootElement, typedOptions);
        if (stopped) {
            this.typed.stop();
        }
        if (typedRef) {
            typedRef(this.typed);
        }
    }
    componentWillUnmount() {
        if (this.typed) {
        this.typed.destroy();
    }
    }

    shouldComponentUpdate(nextProps) {
        if (this.props !== nextProps) {
            const { style, className, ...typedOptions } = nextProps;
            this.typed.options = Object.assign(this.typed.options, typedOptions);
            Object.keys(nextProps).forEach((key) => {
                if (this.typed[key]) {
                    this.typed[key] = nextProps[key];
                }
            });
            if ((!this.props.loop && nextProps.loop) ||
                (this.props.fadeOut !== nextProps.fadeOut) ||
                this.props.strings.length !== nextProps.strings.length) {
                this.typed.destroy();
                this.typed = new Typed(this.rootElement, typedOptions);
                if (this.props.typedRef) {
                    this.props.typedRef(this.typed);
                }
            }
            return true;
        }
        return false;
    }
    getRef = (element) => {
        this.rootElement = element;
    }
    render() {
        const { style, className, children } = this.props;
        let child = <span ref={this.getRef} />;
        if (children) {
            child = React.cloneElement(children, {
                ref: this.getRef,
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
    style: PropTypes.object,
    className: PropTypes.string,
    children: PropTypes.object,
    typedRef: PropTypes.func,
    stopped: PropTypes.bool,
};

export default ReactTyped;
