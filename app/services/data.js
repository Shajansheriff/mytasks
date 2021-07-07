import Service, { inject as service } from '@ember/service';

export default Service.extend({
  store: service(),
  createBoard(data={'name': 'Test', 'desc': 'test desc'}) {
    let board = this.get('store').createRecord('board', data);
    return board.save();
  },
  updateBoard(boardId, data={}) {
    this.get('store').findRecord('board', boardId).then(function(board) {
       board.set(data);
    });
  }
});
