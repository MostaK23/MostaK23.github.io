const image = './images/room.jpeg';
const bgImage = './images/bg.jpg';
const background = document.getElementById('panorama');

pannellum.viewer('panorama', {
  "type": "equirectangular",
  "panorama": image,
  "preview": bgImage,
  "autoLoad": true,
  "hotSpots": [
    {
        "pitch": -1,
        "yaw": 72,
        "type": "info",
        "text": "Телевизор",
        "URL": "https://artbma.org/"
    }
  ]
});

