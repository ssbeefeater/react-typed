import React, { memo, useMemo, useRef, useEffect } from "react";
import Typed from "typed.js";
export const ReactTyped = memo(({ style, className, typedRef, parseRef: transformRef, stopped, children, startWhenVisible, ...typedOptions }) => {
    const rootElement = useRef(null);
    const shouldUpdateArgs = useMemo(() => [
        ...Object.values(typedOptions).filter((v) => typeof v === "boolean" ||
            typeof v === "number" ||
            typeof v === "string"),
        typedOptions.strings?.join(","),
    ], [typedOptions]);
    useEffect(() => {
        const element = (transformRef && transformRef(rootElement)) || rootElement.current;
        const typed = new Typed(element, { ...typedOptions });
        if (stopped || startWhenVisible) {
            typed?.stop();
        }
        if (startWhenVisible) {
            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    typed?.start();
                    observer.disconnect();
                }
            });
            observer.observe(element);
        }
        if (typedRef && typed) {
            typedRef(typed);
        }
        return () => {
            typed.destroy();
        };
    }, shouldUpdateArgs);
    const child = !children ? (React.createElement("span", { style: style, ref: rootElement })) : (React.cloneElement(children, {
        ref: rootElement,
    }));
    return (React.createElement("span", { style: style, className: className, "data-testid": "react-typed" }, child));
});
export { Typed };
//# sourceMappingURL=index.js.map