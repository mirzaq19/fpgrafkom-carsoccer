import * as THREE from 'three'

export default function createLight(
  scene: THREE.Scene,
  pos: { x: number; y: number; z: number }
) {
  const light = new THREE.PointLight(0xffffff, 1.4)
  light.position.set(pos.x, pos.y, pos.z)
  light.castShadow = true
  scene.add(light)

  const hemiLight = new THREE.HemisphereLight(0xffeeb1, 0x080820, 0.5);
  scene.add(hemiLight);

  return light
}
