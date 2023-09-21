import { RigidBody } from '@react-three/rapier'
import { Box } from '@react-three/drei'

export const SampleCube = () => {
  return (
    <RigidBody type="dynamic" position={[2, 5, 0]} colliders={'cuboid'} mass={0.1}>
      <Box>
        <meshStandardMaterial color="royalblue" />
      </Box>
    </RigidBody>
  )
}
