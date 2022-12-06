/**
 * 
 * @param {Object} hint
 * @param {Number} yaw X-axis value
 * @param {Number} pitch Y-axis value
 * @param {String} text hint text
 * @param {String} url redirect URL
 */
export function Hint({yaw, pitch, text, url}) {
	this.yaw = yaw;
	this.pitch = pitch;
	this.text = text;
	this.URL = url;
	this.type = 'info';
}