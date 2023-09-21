import * as THREE from 'three'
import grass from '../../assets/grass.jpg'
import { useTexture } from '@react-three/drei'
import { CuboidCollider, RigidBody } from '@react-three/rapier'

const Ground = () => {
  const texture = useTexture(grass)
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping
  return (
    <RigidBody type="fixed" colliders={false} friction={3} name="ground">
      <mesh receiveShadow position={[0, -1, 0]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial map={texture} map-repeat={[240, 240]} color="green" />
      </mesh>
      <CuboidCollider args={[5, 1, 5]} position={[0, -2, 0]} />
    </RigidBody>
  )
}

export default Ground
