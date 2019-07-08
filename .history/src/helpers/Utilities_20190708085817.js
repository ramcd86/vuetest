export const logger = (arg) => {
    console.log(arg);
}


export const post = (value) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.timeout = 2000;
        request.open('POST', value.url, true);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        request.send(value.data);
        request.onreadystatechange = (e) => {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    resolve(request.response);
                } else {
                    reject(request.status);
                }
            }
        };
        request.timeout = () => {
            reject("The operation timed out.");
        };
    });

}

export const get = (url) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.timeout = 2000;
        request.onreadystatechange = function (e) {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    resolve(request.response);
                } else {
                    reject(request.status);
                }
            }
        };
        request.ontimeout = function () {
            reject("The operation timed out.");
        };
        request.open('get', url, true);
        request.send();
    });
}