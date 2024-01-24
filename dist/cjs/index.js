"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Typed = exports.ReactTyped = void 0;
const react_1 = __importStar(require("react"));
const typed_js_1 = __importDefault(require("typed.js"));
exports.Typed = typed_js_1.default;
exports.ReactTyped = (0, react_1.memo)((_a) => {
    var { style, className, typedRef, parseRef: transformRef, stopped, children, startWhenVisible } = _a, typedOptions = __rest(_a, ["style", "className", "typedRef", "parseRef", "stopped", "children", "startWhenVisible"]);
    const rootElement = (0, react_1.useRef)(null);
    const shouldUpdateArgs = (0, react_1.useMemo)(() => {
        var _a;
        return [
            ...Object.values(typedOptions).filter((v) => typeof v === "boolean" ||
                typeof v === "number" ||
                typeof v === "string"),
            (_a = typedOptions.strings) === null || _a === void 0 ? void 0 : _a.join(","),
        ];
    }, [typedOptions]);
    (0, react_1.useEffect)(() => {
        const element = (transformRef && transformRef(rootElement)) || rootElement.current;
        const typed = new typed_js_1.default(element, Object.assign({}, typedOptions));
        if (stopped || startWhenVisible) {
            typed === null || typed === void 0 ? void 0 : typed.stop();
        }
        if (startWhenVisible) {
            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    typed === null || typed === void 0 ? void 0 : typed.start();
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
    const child = !children ? (react_1.default.createElement("span", { style: style, ref: rootElement })) : (react_1.default.cloneElement(children, {
        ref: rootElement,
    }));
    return (react_1.default.createElement("span", { style: style, className: className, "data-testid": "react-typed" }, child));
});
//# sourceMappingURL=index.js.map