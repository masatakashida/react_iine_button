module.exports = {
  mode: 'development',
  entry: __dirname + "/src/main.js",
  output: {
    path: __dirname + "/dist",
    filename: "like-button.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                ['env', {'modules': false}],
                'react'
              ]
            }
          }
        ]
      }
    ]
  }
};