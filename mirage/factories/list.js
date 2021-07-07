import Mirage, { faker } from 'ember-cli-mirage';

function generateRandomIdUptoLimit(limit) {
  return (faker.random.number() % limit);
}
export default Mirage.Factory.extend({
  id(i) {
    return i;
  },
  name() {
    return faker.lorem.word();
  },
  board(i) {
    // return faker.list.random(0, generateRandomIdUptoLimit(2))(i);
    return 0;
  }
});
