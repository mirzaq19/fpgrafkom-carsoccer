import * as THREE from 'three'

export default interface Object3DGLTF extends THREE.Object3D<THREE.Event> {
  isMesh: boolean
  material: THREE.MeshStandardMaterial
  traverse(callback: (object: THREE.Object3D<THREE.Event>) => void): void
}
