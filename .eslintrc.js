module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'google',
  plugins: [
    'html'
  ],
  'rules': {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
};
