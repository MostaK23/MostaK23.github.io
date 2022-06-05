import { Scene, HotSpotInfo, HotSpotScene } from './constructors.js';

const room1 = new Scene('equirectangular', './images/room.jpeg', [
  new HotSpotInfo(-2, 5, 'Картина', 'https://www.youtube.com/watch?v=iik25wqIuFo'),
  new HotSpotInfo(46, -6, 'Info', 'https://www.youtube.com/shorts/aTFI1zyfrdI'),
  new HotSpotInfo(72, 0, 'Info', 'https://www.youtube.com/shorts/aTFI1zyfrdI'),
  new HotSpotScene(123, 0, 'Купаться', 'sea')
]);

const sea = new Scene('equirectangular', './images/sea.jpg', [
  new HotSpotScene(90, 5, 'Домой', 'room1')
]);

pannellum.viewer('panorama', {
  "default": {
    "firstScene": "room1",
    "autoLoad": true,
    "autoRotate": -1,
    "orientationOnByDefault": true,
    
  },
  "scenes": {
    "room1": room1,
    "sea": sea
  }
});

