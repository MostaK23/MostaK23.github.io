import { Scene } from '../Scene.js';
import { nextScenes } from './nextScenes.js';
import { hints } from './hints.js';

const image = 'audience_210_2.jpg';

export const audience_210_2 = new Scene({
	image,
	hotSpots: [
		...nextScenes,
		...hints,
	],
	minPitch: -45,
	maxPitch: 17,
});