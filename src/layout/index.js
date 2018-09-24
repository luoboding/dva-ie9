

export default function (app) {
  // register your model
  app.model(require('./models/index.js').default);
  return require('./containers/index.js').default;
}
