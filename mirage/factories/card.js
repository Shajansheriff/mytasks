import Mirage, { faker } from 'ember-cli-mirage';

function generateRandomIdUptoLimit(limit) {
  return (faker.random.number() % limit);
}
export default Mirage.Factory.extend({
  name() {
    return faker.random.words();
  },
  desc() {
    return faker.lorem.sentences();
  },
  pos(i) {
    return faker.list.random(0, generateRandomIdUptoLimit(99))(i);
  },
  list(i) {
    return faker.list.random(0, generateRandomIdUptoLimit(5))(i);
  },
  board(i) {
    // return faker.list.random(0, generateRandomIdUptoLimit(2))(i);
    return 0;
  }
});
