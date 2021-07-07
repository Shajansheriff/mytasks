import DragDrop from 'ember-drag-drop/services/drag-coordinator';
import DraggableObject from 'my-tasks/components/draggable-object';

export default {
  name: 'modify-drag-drop',
  initialize() {
    DragDrop.reopen({
      // Remove all positioning logic with respect to dropping the dragged object as it is not working as per requirements
      draggingOver(event, emberObject) {
        const currentOffsetItem = this.get('currentOffsetItem');
        const hasSameSortingScope = this.get('currentDragItem.sortingScope') === emberObject.get('sortingScope');

        if (!this.get('lastEvent')) {
          this.set('lastEvent', event);
        }

        this.set('lastEvent', event);

        if (!this.get('isMoving')) {
          if (event.target !== this.get('currentDragEvent').target && hasSameSortingScope) { // if not dragging over self
            if (currentOffsetItem !== emberObject) {
              this.moveElements(emberObject);
              this.set('currentOffsetItem', emberObject);
            }
          } else {
            // reset because the node moved under the mouse with a move
            this.set('currentOffsetItem', null);
          }
        }
      }
    });
    DraggableObject.reopen({
      attributeBindings: 'data-draggable-object-id'
    });
  }
};
