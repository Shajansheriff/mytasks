import Controller from '@ember/controller';

export default Controller.extend({
  lists: null,
  cards: null,
  isShowingModal: false,
  canShowCardDetail: false,
  actions: {
    listSortEndAction(event) {
    },
    cardSortEndAction(event) {
      let cardId = $(event.target).closest('.js-draggableObject').attr('data-draggable-object-id');
    },
    toggleModal() {
      this.toggleProperty('isShowingModal');
    },
    openModal(listId) {
      this.set('isShowingModal', true);
      this.set('currentList', listId);
    },
    closeModal() {
      this.set('isShowingModal', false);
      this.set('currentList', null)
    },
    addCard(value) {
      // let list = this.get('model').get('lists').findBy('id', this.get('currentList'))
      this.get('model').get('lists').findBy('id', this.get('currentList')).get('cards._objects').push(value)
      // list.get('cards').push(value);
    },
    toggleCardDetail() {
      this.toggleProperty('canShowCardDetail');
    },
    openCardDetail(card) {
      this.set('currentCard', card)
      this.set('canShowCardDetail', true);
    }
  }
});