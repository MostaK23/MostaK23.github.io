import { EquirectangleScene, HotSpotScene } from "../constructors.js";

const panorama = '../images/before.jpg'

export const scene1 = new EquirectangleScene(panorama, [
  new HotSpotScene('-90', -5, '', 'scene2')
])