module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      "^/videos": {
        target: "http://65.1.32.212/",
        ws: true,
        changeOrigin: true,
      },
    },
  },
};
