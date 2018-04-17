let axios = require('axios');
const api = new Proxy(
    {},
    {
        get(target, prop) {
            const method = /^[a-z]+/.exec(prop)[0];
            const path =
                "/" +
                prop
                    .substring(method.length)
                    .replace(/([a-z])([A-Z])/g, "$1/$2")
                    .replace(/\$/g, "/$/")
                    .toLowerCase()
                    .replace(/_[a-z]/g, function(result) {
                        return result.substr(1).toUpperCase();
                    });
            return (...args) => {
                const url = path.replace(/\$/g, () => args.shift());
                const options = args.shift() || {};
                return axios({ method, url, ...options });
            };
        }
    }
);

module.exports = {
    api,
    axios
};
