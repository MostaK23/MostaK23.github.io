import { EquirectangleScene, HotSpotScene } from "../constructors.js";

const panorama = '../images/scene2.jpg'

export const scene2 = new EquirectangleScene(panorama, [
  new HotSpotScene('-16', -5, '', 'scene1')
])