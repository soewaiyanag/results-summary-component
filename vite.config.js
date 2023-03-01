const path = require("path");

export default {
  root: path.resolve(__dirname, "src"),
  resolve: {
    alias: {
      "@node_modules": path.resolve(__dirname, "node_modules"),
      "@fonts": path.resolve(__dirname, "assets/fonts"),
      "@images": path.resolve(__dirname, "assets/images"),
    },
  },
  server: {
    port: 8080,
    hot: true,
  },
};
