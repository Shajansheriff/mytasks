function modifyLists(db, lists) {
  lists = lists.map((list) => {
    let board = { id: list.board, name: db.boards.find(parseInt(list.board)).name }
    let cards = modifyCards(db, db.cards)
    list.board = board;
    list.cards = cards;
    return list
  });
  return lists
}

function modifyCards(db, cards) {
  cards = cards.map((card) => {
    let board = db.boards.find(parseInt(card.board))
    let list = db.lists.find(parseInt(card.list))
    card.board = { id: board.id, name: board.name }
    card.list = { id: list.id, name: list.name }
    return card;
  })
  return cards
}
export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.4.x/shorthands/
  */
  this.urlPrefix = 'http://localhost:8000'
  this.namespace = '/api/';
  this.get('/boards/', (schema) => {
    return schema.db.boards;
  })
  this.get('/boards/:id/', ({ db }, request) => {
    let id = request.params.id;
    let board = db.boards.find(parseInt(id));
    let lists = db.lists.filterBy('board', parseInt(board.id));
    let cards = db.cards.filterBy('board', parseInt(board.id));
    board['lists'] = modifyLists(db, lists)
    board['cards'] = modifyCards(db, cards)
    return board;
  });
  this.get('/lists/', ({ db }) => {
    let lists =  db.lists;
    return modifyLists(db, lists);
  })
  this.get('/lists/:id/', ({ db }, request) => {
    let id = request.params.id;
    let boards =  db.boards;
    let list =  db.lists.find(parseInt(id));
    let cards =  db.cards.filterBy('list', list.id);
    list['cards'] = modifyCards(db, cards.filterBy('list', parseInt(list.id)))
    list['board'] = boards.find(parseInt(list.board))
    return modifyLists(db, [list])[0];
  });
}
