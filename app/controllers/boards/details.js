import Controller, { inject as controller } from '@ember/controller';

export default Controller.extend({
  actions: {
    listSortEndAction(event) {
      console.log(list)
      console.log(event)
    },
    cardSortEndAction(event) {
      let cardId = $(event.target).closest('.js-draggableObject').attr('data-draggable-object-id');
      console.log(cardId)
    }
  }
});