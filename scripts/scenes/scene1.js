import { EquirectangleScene, HotSpotInfo, HotSpotScene } from "../constructors.js";

const panorama = '../images/scene1.jpg'
const nextScene = new HotSpotScene(5, -5, 'Перейти', 'scene2');

const yBounds = [-45, 25];

const tabletDescription = 'Планшет';
const serverDescription = 'Серверная';
const boardDescription = 'Доска';
const computerDescription = `ПК\nCPU: Intel Core i5-10400 2.9GHz\nRAM: 16GB`;

const tablet = new HotSpotInfo(23, -11, tabletDescription);
const server = new HotSpotInfo(-12, -9, serverDescription);
const board = new HotSpotInfo(30, 2, boardDescription);
const computer = new HotSpotInfo(85, -20, computerDescription);

export const scene1 = new EquirectangleScene(panorama, yBounds, [
  nextScene,
  tablet,
  server,
  board,
  computer
])

