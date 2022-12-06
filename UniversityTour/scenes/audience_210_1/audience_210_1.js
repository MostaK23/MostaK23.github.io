import { nextScenes } from './nextScenes.js';
import { hints } from './hints.js';
import { Scene } from '../Scene.js';

const image = 'audience_210_1.jpg';

export const audience_210_1 = new Scene({
	image,
	hotSpots: [
		...nextScenes,
		...hints
	],
	minPitch: -45,
	maxPitch: 25
});