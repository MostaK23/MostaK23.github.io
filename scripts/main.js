import { scene1 } from './scenes/scene1.js';
import { scene2 } from './scenes/scene2.js';

pannellum.viewer('panorama', {
  "default": {
    "firstScene": "scene1",
    "autoLoad": true,
    "autoRotate": -1,
    "orientationOnByDefault": true,
  },
  "scenes": {
    scene1,
    scene2
  }
});