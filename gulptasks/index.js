const glob = require("glob").sync;
const path = require("path");

module.exports = function (gulp, config) {
    glob(__dirname + "/*.js").forEach(function (modulePath) {
        if (modulePath.indexOf("index.js") === -1) {
            require(modulePath)(gulp, config);
        }
    });
};