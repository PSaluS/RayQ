import Attribute from "./attributes.js";
import Iteration from "./iteration.js";
import Content from "./content.js";
import Events from "./events.js"
import {mixin} from "../Utils/mixin.js";

const _NODES = new WeakMap();

export default class RayQ extends mixin(Attribute, Iteration, Content, Events)
{

    constructor(nodes) {

        super();

        if(!Array.isArray(nodes)) {
            nodes = [nodes];
        }

        _NODES.set(this, nodes);

    }

    get(index) {
        let nodes = _NODES.get(this);

        if(Number.isInteger(index)) {
            return nodes[index];
        } else {
            return nodes;
        }
    }

    *[Symbol.iterator]() {
        yield this.get();
    }

    static create(nodes) {
        return new RayQ(nodes);
    }

}