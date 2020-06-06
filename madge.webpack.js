const path = require("path");
const userConfig =
  require(path.resolve(process.cwd(), "package.json"))["next-unused"] || {};
const { alias } = userConfig;

if (alias) {
  Object.entries(alias).forEach(([input, output]) => {
    alias[input] = path.resolve(process.cwd(), output);
  });
}

module.exports = {
  rules: [
    {
      test: /\.tsx?$/,
      use: "ts-loader",
      exclude: /node_modules/,
    },
  ],
  resolve: {
    alias,
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
};
