import { RigidBody } from '@react-three/rapier'
import { Sphere } from '@react-three/drei'

export const SampleSphere = () => {
  return (
    <RigidBody type="dynamic" position={[3, 5, 0]} colliders={'ball'} mass={0.01}>
      <Sphere>
        <meshStandardMaterial color="royalblue" />
      </Sphere>
    </RigidBody>
  )
}
