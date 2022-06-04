const room1 = './images/room.jpeg';
const room2 = './images/room2.jpg';

const bgImage = './images/bg.jpg';


pannellum.viewer('panorama', {
  "default": {
    "firstScene": "room2",
    "autoLoad": true
  },
  "scenes": {
    "room1": {
      "type": "equirectangular",
      "panorama": room1,
      "hotSpots": [
        {
          "pitch": 0,
          "yaw": 125,
          "type": "scene",
          "text": "Комната 2",
          "sceneId": "room2"
        }
      ]
    },
    "room2": {
      "type": "equirectangular",
      "panorama": room2,
      "pitch": 4,
      "yaw": -120,
      "hotSpots": [
        {
          "pitch": 7,
          "yaw": -115,
          "type": "scene",
          "text": "Комната 1",
          "sceneId": "room1"
        }
      ]
    }
  }
});

