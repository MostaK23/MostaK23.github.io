/**
 * 
 * @param {Object} nextScene
 * @param {Number} nextScene.yaw X-axis value
 * @param {Number} nextScene.pitch Y-axis value
 * @param {String} nextScene.nextScene next scene
 */
export function NextScene({yaw, pitch, text, nextScene}) {
	this.type = 'scene';
	this.yaw = yaw;
	this.pitch = pitch;
	this.text = text;
	this.sceneId = nextScene;
}