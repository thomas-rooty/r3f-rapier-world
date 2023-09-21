import { CuboidCollider, RigidBody } from '@react-three/rapier'

const Ground = () => {
  return (
    <RigidBody type="fixed" colliders={false} friction={2} name="ground">
      <mesh receiveShadow position={[0, -1, 0]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="green" />
      </mesh>
      <CuboidCollider args={[5, 1, 5]} position={[0, -2, 0]} />
    </RigidBody>
  )
}

export default Ground
