import {serialize} from "../Utils/ajax.js";

function getXHR(type, url) {

    const xhr = new XMLHttpRequest();
    const p = new Promise((resolve, reject) => {
        xhr.onload = function() {
            if(xhr.status >= 200 && xhr.status < 400) {
                resolve(xhr.responseText);
            } else {
                reject(new Error(`ERROR!
                Axaj require falis status: ${xhr.status}!`));
            }
          };

          xhr.onerror = function() {
              reject(new Error(`ERROR!
              Comunication fali!`));
          }
    });

    xhr.open(type, url);

    return {xhr, p};
}

export default {

    get(url) {
        const {xhr, p} = getXHR("GET", url);

        xhr.send();

        return p;
    },

    post(url,data) {
        const{xhr,p} = getXHR("POST", url);

        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(serialize(data));

        return p;
    }
};