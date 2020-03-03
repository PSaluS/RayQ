import Attribute from "./attributes.js";
import Iteration from "./iteration.js";
import {mixin} from "../Utils/mixin.js";

const _NODES = new WeakMap();

export default class RayQ extends mixin(Attribute, Iteration)
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