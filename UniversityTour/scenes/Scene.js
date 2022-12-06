/**
 * 
 * @param {Object} scene 
 * @param {String} scene.image scene image
 * @param {Array} scene.hotSpots array of hot spots(next scenes, hints)
 * @param {Number} scene.minPitch min Y-axis value
 * @param {Number} scene.maxPitch max Y-axis value
 * @param {String} scene.type type of scene
 */
export function Scene({image, hotSpots, minPitch, maxPitch, type='equirectangular'}) {
	this.panorama = `images/${image}`;
	this.minPitch = minPitch;
	this.maxPitch = maxPitch;
	this.hotSpots = hotSpots;
	this.type = type;
}