export default function (app) {
  app.model(require('./models/index.js').default);
  return require('./containers/index.js').default;
}
