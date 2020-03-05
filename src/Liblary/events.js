export default {
    on(type, fn) {
        this.each (node => node.addEventListener(type, fn ,false));
        return this;
    },

    off(type, fn) {
        this.each (node => node.removeEventListener(type, fn ,false));
        return this;
    }
};