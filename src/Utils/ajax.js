import {isObject} from "./check.js";

export function serialize(data) {

    const e = encodeURIComponent;
    let out = "";

    if(!isObject(data))  return out;

    for (let key of Object.keys(data)) {
        out += `${e(key)}=${e(data[key])}&`;
    }
    return out.slice(0, -1);
}