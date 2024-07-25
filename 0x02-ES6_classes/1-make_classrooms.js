import classRoom from './0-classroom';

function initializeRooms() {
  const room1 = new classRoom(19);
  const room2 = new classRoom(20);
  const room3 = new classRoom(21);

  return [room1, room2, room3];
}
