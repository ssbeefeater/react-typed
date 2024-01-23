var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { memo, useMemo, useRef, useEffect } from "react";
import Typed from "typed.js";
export const ReactTyped = memo((_a) => {
    var { style, className, typedRef, parseRef: transformRef, stopped, children } = _a, typedOptions = __rest(_a, ["style", "className", "typedRef", "parseRef", "stopped", "children"]);
    const rootElement = useRef(null);
    const shouldUpdateArgs = useMemo(() => {
        var _a;
        return [
            ...Object.values(typedOptions).filter((v) => typeof v === "boolean" ||
                typeof v === "number" ||
                typeof v === "number"),
            (_a = typedOptions.strings) === null || _a === void 0 ? void 0 : _a.join(","),
        ];
    }, [typedOptions]);
    useEffect(() => {
        const element = (transformRef && transformRef(rootElement)) || rootElement.current;
        const typed = new Typed(element, Object.assign({}, typedOptions));
        if (typedRef && typed) {
            typedRef(typed);
        }
        if (stopped) {
            typed === null || typed === void 0 ? void 0 : typed.stop();
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