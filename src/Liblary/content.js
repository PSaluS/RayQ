import RayQ from "./RayQ.js"

export default {
    text(value) {
        if(value !== undefined) {
            return this.each( node => node.textContent = value);
        } else {
            let out = [];
            for (let i of this.get()) {
                out.push(i.textContent);
            }
            return out;
        }
    },

    textR(value) {
        if(value !== undefined) {
            let out = [];
            for(let i of this.get()) {
                if(i.textContent == value) out.push(i);
            }
            if(out.length > 0)  return RayQ.create(out);
            else    return false;
        } else  return this;
    },

    html(value) {
        if(value !== undefined) {
            return this.each( node => node.innerHTML = value);
        } else {
            let out = [];
            for (let i of this.get()) {
                out.push(i.innerHTML);
            }
            return out;
        }
    }
};