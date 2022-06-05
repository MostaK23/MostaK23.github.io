import { Scene, HotSpotInfo, HotSpotScene } from './constructors.js';

const room1 = new Scene('equirectangular', './images/room.jpeg', [
  new HotSpotInfo(-2, 5, 'Картина', 'https://www.youtube.com/'),
  new HotSpotScene(123, 0, 'Купаться', 'sea')
]);

const sea = new Scene('equirectangular', './images/sea.jpg', [
  new HotSpotScene(90, 5, 'Домой', 'room1')
]);

pannellum.viewer('panorama', {
  "default": {
    "firstScene": "room1",
  },
  "scenes": {
    "room1": room1,
    "sea": sea
  }
});

