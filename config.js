const distDir = "./dist";

module.exports = {
    src: {
        js: {
            inputFiles: ["./src/js/**/*.js"],
            outputFile: "package.min.js"
        },
        html: {
            inputFiles: ["./src/html/**/*.html"],
            outputDir: distDir
        },
        less: {
            inputFiles: ["./src/less/**/*.less"],
            outputFile: "styles.min.css",
            sourceMaps: "./"
        },
        assets: {
            inputFiles: ["./src/**/*.png"],
            outputDir: distDir
        }
    },
    dist: {
        dir: distDir
    },
    server: {
        port: 8080
    }
};