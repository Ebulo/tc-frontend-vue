module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      "^/videos": {
        target: "https://ec2-65-1-32-212.ap-south-1.compute.amazonaws.com/",
        ws: true,
        changeOrigin: true,
      },
    },
  },
};
