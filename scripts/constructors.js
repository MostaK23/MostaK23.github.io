export function HotSpotInfo(angle, y, text, url) {
  this.yaw = angle;
  this.pitch = y;
  this.type = 'info';
  this.text = text;
  this.URL = url;
}

export function HotSpotScene(angle, y, text, nextScene) {
  this.yaw = angle;
  this.pitch = y;
  this.type = 'scene';
  this.text = text;
  this.sceneId = nextScene;
}

export function Scene(type, panorama, hotSpots) {
  this.type = type;
  this.panorama = panorama;
  this.hotSpots = hotSpots;
}
