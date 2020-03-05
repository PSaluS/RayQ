import {isObject} from "../Utils/check.js"
import RayQ from "./RayQ.js";
export default {

    attr(key, value, ...indexs) {

        if(key !== undefined && value === undefined) {
            let out = [];

            for(let i of this.get()){
                out.push(i.getAttribute(key));
            }
            return out;
        } else if (key !== undefined && value !== undefined && indexs.length > 0) {

            const tabix = [...indexs];
            for (let i of tabix) {
                this.get(i).setAttribute(key, value);
            }
        } else {
            this.each( node => node.setAttribute(key, value));
        }
        return this;
    },

    classAdd(className) {
        return this.each(node => node.classList.add(className));

    },

    classRemove(className) {
        return this.each(node => node.classList.remove(className));

    },

    classToggle(className) {
        return this.each(node => node.classList.toggle(className));

    },

    isClass(className) {
        let out = [];
        for (let i of this.get()) {
            if(i.classList.contains(className)) out.push(i);
        }
        if(out.length > 0)  return out;
        else    return false;
    },

    isClassR(className) {
        let out = [];
        for (let key of this.get()) {
            if(key.classList.contains(className)) out.push(key);
        }
        if(out.length > 0)  return RayQ.create(out);
        else    return false;
    },

    css(prop, val) {

        if(prop !== undefined && val !== undefined) {
             return this.each(node => node.style[prop] = val);
        } else if(isObject(prop)) {
            for(let key in prop) {
                this.each(node => node.style[key] = prop[key]);
            }
            return this;
        } else {

            let out = [];

            for(let i of this.get()){
                out.push(i.style[prop]);
            }
            return out;
        }
    },

    cssR(prop, val) {
        let out = [];
        if(prop !== undefined && val !== undefined) {
            for(let i of this.get()) {
                if(i.style[prop] == val) out.push(i);
            }
            if(out.length > 0)  return RayQ.create(out);
            else return false;
        } else if (prop !== undefined){
            for(let i of this.get()) {
                if(i.style[prop] !== "") out.push(i);
            }
            if(out.length > 0)  return RayQ.create(out);
            else return false;
        }   else return this;
    }

};