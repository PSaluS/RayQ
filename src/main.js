import RayQ from "./Liblary/RayQ.js";
import {isSelector, isHTMLTag, isDOMNode } from "./Utils/check.js";
import {findElements, createElement } from "./Utils/element.js";

function init (param) {

    "use strict";

    let nodes = null;

    if (isSelector(param)) {
        nodes = findElements(param);
    } else if (isHTMLTag(param)) {
        nodes = createElement(param)
    } else if (isDOMNode(param)) {
        nodes = param;
    }
    return RayQ.create(nodes);
}

function use$(swi) {
    try{
    const w$= window.$;
    window.$ = init;
    if(name !== undefined) {
        window.swi = w$;
        return true;
    }
    else {
        return w$;
    }
    }
    catch{
        return false;
    }
}

window.RQ = init;
window.$RQ = use$;
if(window.$ === undefined) window.$ = init;