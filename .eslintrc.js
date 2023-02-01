module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-creight`
  extends: ["creight"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
