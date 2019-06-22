import Mirage, { faker } from 'ember-cli-mirage';

function generateRandomIdUptoLimit(limit) {
  return (faker.random.number() % limit);
}
export default Mirage.Factory.extend({
  id(i) {
    return i;
  },
  name() {
    return faker.lorem.words();
  },
  desc() {
    return faker.lorem.sentence();
  }
});
