import Component from '@ember/component';

export default Component.extend({
  name: null,
  cards: null,
  canShowForm: false,
  actions: {
    onAdd() {
      let name = this.get('name');
      // const attrs = get(this, 'attrs');
      this.get('cards').push({name})
    },
    toggleForm() {
      this.toggleProperty('canShowForm')
    },
    closeCard() {
      this.set('name', null);
      this.send('toggleForm');
    }
  }
});
