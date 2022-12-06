import {Hint} from '../Hint.js';

const tabletDescription = `Графический планшет X-Pen Artist 22R Pro\n\nРазрешение: 1920x1080(16:9)`;
const serverDescription = 'Серверная\nЛокально-вычислительная сеть и система видеонаблюдения в МГУ имени А.А. Кулешова';
const boardDescription = 'Интерактивная система Ritter 86\n\nТип дисплея: ЖК с LED-подсветкой\nДиагональ: 86"\nРазрешение: 3840x2160@60Гц';
const computerDescription = `ОПС Компьютер\n\nCPU: Intel Core i7-10700\nRAM: DDR4 16ГБ\nSSD: 240ГБ\nGPU: Intel UHD Graphics 630`;

const tablet = new Hint({
	yaw: 23,
	pitch: -11,
	text: tabletDescription,
});

const server = new Hint({
	yaw: -12,
	pitch: -9,
	text: serverDescription,
});

const board = new Hint({
	yaw: 30,
	pitch: 2,
	text: boardDescription,
});

const computer = new Hint({
	yaw: 85,
	pitch: -20,
	text: computerDescription,
});

export const hints = [
	tablet,
	server,
	board,
	computer,
];