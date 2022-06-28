import { EquirectangleScene, HotSpotInfo, HotSpotScene } from "../constructors.js";

const panorama = '../images/scene2.jpg';
const nextScene = new HotSpotScene(-15, -5, 'Перейти', 'scene1');

const yBounds = [-45, 17];

const computerDescription =  `ОПС Компьютер\n\nCPU: Intel Core i7-10700\nRAM: DDR4 16ГБ\nSSD: 240ГБ\nGPU: Intel UHD Graphics 630`;
const boardDescription = 'Интерактивная система Ritter 86\n\nТип дисплея: ЖК с LED-подсветкой\nДиагональ: 86"\nРазрешение: 3840x2160@60Гц';

const computer = new HotSpotInfo(-110, -21, computerDescription);
const board = new HotSpotInfo(-36, -1, boardDescription);

export const scene2 = new EquirectangleScene(panorama, yBounds,  [
  nextScene,
  computer,
  board
]);
