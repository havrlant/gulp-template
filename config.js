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
        images: {
            inputFiles: ["./src/images/**/*.{png,gif,jpg}"],
            outputDir: distDir
        },
        assets: {
            inputFiles: ["./src/**/*.pdf"],
            outputDir: distDir
        }
    },
    dist: {
        dir: distDir
    },
    server: {
        port: 8080
    },
    coreGulpTasks: ['javascript', 'html', 'less', 'assets', 'images']
};