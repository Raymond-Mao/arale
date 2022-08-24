const fabric = require('@umijs/fabric');
module.exports = {
  ...fabric.prettier,
  semi: true,
  arrowParens: 'always',
  tabWidth: 2,
};
