import { useRef } from 'react'
import { Controls } from '../../App.tsx'
import { useFrame } from '@react-three/fiber'
import { RigidBody, CapsuleCollider } from '@react-three/rapier'
import { Sphere, useKeyboardControls } from '@react-three/drei'
import { useCharacterStore } from '../../../stores/character.store.ts'

const JUMP_FORCE = 0.5
const MOVEMENT_SPEED = 0.1
const MAX_SPEED = 2

const CharacterController = () => {
  const rigidbody = useRef<any>()
  const character = useRef<any>()
  const isOnFloor = useCharacterStore((state) => state.isOnFloor)
  const setIsOnFloor = useCharacterStore((state) => state.setIsOnFloor)

  // Controls
  const jumpPressed = useKeyboardControls((state) => state[Controls.jump])
  const leftPressed = useKeyboardControls((state) => state[Controls.left])
  const rightPressed = useKeyboardControls((state) => state[Controls.right])
  const forwardPressed = useKeyboardControls((state) => state[Controls.forward])
  const backwardPressed = useKeyboardControls((state) => state[Controls.backward])

  // Movement logic
  useFrame(() => {
    const impulse = { x: 0, y: 0, z: 0 }
    if (jumpPressed && isOnFloor) {
      impulse.y += JUMP_FORCE
    }

    const linvel = rigidbody.current?.linvel()
    let changeRotation = false
    if (rightPressed && linvel.x < MAX_SPEED) {
      impulse.x += MOVEMENT_SPEED
      changeRotation = true
    }
    if (leftPressed && linvel.x > -MAX_SPEED) {
      impulse.x -= MOVEMENT_SPEED
      changeRotation = true
    }
    if (forwardPressed && linvel.z > -MAX_SPEED) {
      impulse.z -= MOVEMENT_SPEED
      changeRotation = true
    }
    if (backwardPressed && linvel.z < MAX_SPEED) {
      impulse.z += MOVEMENT_SPEED
      changeRotation = true
    }

    rigidbody.current?.applyImpulse(impulse, true)
    if (changeRotation) {
      character.current.rotation.y = Math.atan2(linvel.x, linvel.z)
    }
  })

  return (
    <group>
      <RigidBody
        ref={rigidbody}
        colliders={false}
        scale={[0.5, 0.5, 0.5]}
        onCollisionEnter={({ other }) => {
          if (other.rigidBodyObject?.name === 'ground') {
            setIsOnFloor(true)
          }
        }}
        onCollisionExit={({ other }) => {
          if (other.rigidBodyObject?.name === 'ground') {
            setIsOnFloor(false)
          }
        }}
        enabledRotations={[false, true, false]}
      >
        <CapsuleCollider args={[0.8, 0.4]} position={[0, 1.2, 0]} />
        <group ref={character}>
          <Sphere>
            <meshStandardMaterial color="hotpink" transparent opacity={0} />
          </Sphere>
        </group>
      </RigidBody>
    </group>
  )
}

export default CharacterController
