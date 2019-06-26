import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.get('store').findRecord('board', params.id)
  },
  setupController(controller, model) {
    this._super(...arguments);
    controller.setProperties({
      lists: model.get('lists'),
      cards: model.get('cards')
    })
  }
});
