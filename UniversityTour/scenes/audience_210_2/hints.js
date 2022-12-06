import { Hint } from '../Hint.js';

const computerDescription =  `ОПС Компьютер\n\nCPU: Intel Core i7-10700\nRAM: DDR4 16ГБ\nSSD: 240ГБ\nGPU: Intel UHD Graphics 630`;
const boardDescription = 'Интерактивная система Ritter 86\n\nТип дисплея: ЖК с LED-подсветкой\nДиагональ: 86"\nРазрешение: 3840x2160@60Гц';

const computer = new Hint({
	yaw: -110,
	pitch: -21,
	text: computerDescription,
});

const board = new Hint({
	yaw: -36,
	pitch: 2,
	text: boardDescription,
});

export const hints = [
	computer,
	board,
];