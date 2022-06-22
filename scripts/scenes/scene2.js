import { EquirectangleScene, HotSpotInfo, HotSpotScene } from "../constructors.js";

const panorama = '../images/scene2.jpg';
const nextScene = new HotSpotScene(-15, -5, 'Перейти', 'scene1');

const yBounds = [-45, 17];

const computerDescription = 'Компьютер';
const boardDescription = 'Доска';

const computer = new HotSpotInfo(-110, -21, computerDescription);
const board = new HotSpotInfo(-36, 2, boardDescription);

export const scene2 = new EquirectangleScene(panorama, yBounds,  [
  nextScene,
  computer,
  board
]);
