const isFunction = (value) => typeof value === "function";
const isObject = (value) => value !== null && typeof value === "object";
const isString = (value) => typeof value === "string";
const isUndefined = (value) => typeof value === "undefined";

export { isFunction, isObject, isString, isUndefined };
