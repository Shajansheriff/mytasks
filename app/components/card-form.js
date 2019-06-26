import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  name: null,
  desc: null,
  actions: {
    onSubmit() {
      let name = this.get('name');
      let desc = this.get('desc');
      const attrs = get(this, 'attrs');
      if (attrs.onSubmit) {
        attrs.onSubmit({ name, desc })
      }
    }
  }
});
