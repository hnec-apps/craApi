module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  // extends: ["plugin:vue/essential", "@vue/prettier"],
  parserOptions: {
    ecmaVersion: 8
  },
  extends: ["airbnb-base", "plugin:vue/recommended", "@vue/prettier"],
  rules: {}
};
