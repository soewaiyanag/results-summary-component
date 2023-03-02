import path from "path";

export default {
  resolve: {
    alias: {
      "@node_modules": path.resolve(__dirname, "node_modules"),
      "@fonts": path.resolve(__dirname, "/assets/fonts"),
      "@images": path.resolve(__dirname, "/assets/images"),
      "@styles": path.resolve(__dirname, "/assets/styles"),
    },
  },
  server: {
    port: 8080,
    hot: true,
  },
};
