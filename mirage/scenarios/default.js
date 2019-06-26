export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  server.createList('board', 3);
  server.createList('list', 6);
  server.createList('card', 100);
}
