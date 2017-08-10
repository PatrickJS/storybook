function storybook(cb) {
  cb = cb || console.log.bind(console);
  return cb('storybook');
}

module.exports = storybook
