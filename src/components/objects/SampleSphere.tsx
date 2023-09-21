import { RigidBody } from '@react-three/rapier'
import { Sphere } from '@react-three/drei'

export const SampleSphere = () => {
  return (
    <RigidBody type="dynamic" position={[3, 5, 0]} colliders={'ball'}>
      <Sphere>
        <meshStandardMaterial color="royalblue" />
      </Sphere>
    </RigidBody>
  )
}
