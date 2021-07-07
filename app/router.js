import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('boards', { 'path': '/'});
  this.route('boards.details', { 'path': '/b/:id'});
});

export default Router;
