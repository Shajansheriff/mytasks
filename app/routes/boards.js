import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default Route.extend({
  dataService: service('data'),
  model() {
    return this.store.query('board', {});
  },
  actions: {
    addBoard() {
      this.get('dataService').createBoard();
    },
    showBoard(boardId) {
      this.set('myBoard', this.store.findRecord('board', boardId));
    }
  }
});
