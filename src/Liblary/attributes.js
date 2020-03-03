export default {

    ss(key, value, ...indexs) {

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

    }

};