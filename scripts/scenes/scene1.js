import { EquirectangleScene, HotSpotInfo, HotSpotScene } from "../constructors.js";

const panorama = '../images/scene1.jpg'
const nextScene = new HotSpotScene(5, -5, 'Перейти', 'scene2');

const yBounds = [-45, 25];

const tabletDescription = `Графический планшет X-Pen Artist 22R Pro\n\nРазрешение: 1920x1080(16:9)`;
const serverDescription = 'Серверная\nЛокально-вычислительная сеть и система видеонаблюдения в МГУ имени А.А. Кулешова';
const boardDescription = 'Интерактивная система Ritter 86\n\nТип дисплея: ЖК с LED-подсветкой\nДиагональ: 86"\nРазрешение: 3840x2160@60Гц';
const computerDescription = `ОПС Компьютер\n\nCPU: Intel Core i7-10700\nRAM: DDR4 16ГБ\nSSD: 240ГБ\nGPU: Intel UHD Graphics 630`;

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

