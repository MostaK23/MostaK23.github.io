import { audience_210_1 } from '../scenes/audience_210_1/audience_210_1.js';
import { audience_210_2 } from '../scenes/audience_210_2/audience_210_2.js';

pannellum.viewer('panorama', {
	"default": {
		"firstScene": "audience_210_2",
		"autoLoad": true,
	},
	"scenes": {
		audience_210_1,
		audience_210_2
	}
});