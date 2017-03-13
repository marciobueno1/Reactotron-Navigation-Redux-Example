module.exports = {
  "parserOptions": {
    "ecmaVersion": 7,
    "sourceType": "module",
    "ecmaFeatures": {
      "impliedStrict": true,
      "classes": true,
      "jsx": true
    }
  },
  "globals": {
    "__DEV__": true
  },
  "plugins": [
    "react",
    "react-native",
    "jsx-a11y",
    "import"
  ],
  "extends": [
    "airbnb",
    "plugin:react-native/all"
  ],
  "rules": {
    "react/display-name": 1,
    "react/prop-types": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "no-use-before-define": 0
  }
};
