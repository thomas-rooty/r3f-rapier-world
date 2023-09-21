import { useRef } from 'react'
import { Controls } from '../../App.tsx'
import { useFrame } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'
import { Sphere, useKeyboardControls } from '@react-three/drei'
import { useCharacterStore } from '../../../stores/character.store.ts'

const Player = () => {
  const player = useRef<any>()
  const isOnFloor = useCharacterStore((state) => state.isOnFloor)
  const setIsOnFloor = useCharacterStore((state) => state.setIsOnFloor)

  // Jump impulse
  const jump = () => {
    player.current.applyImpulse({ x: 0, y: 5, z: 0 }, true)
  }

  // Controls
  const jumpPressed = useKeyboardControls((state) => state[Controls.jump])
  const leftPressed = useKeyboardControls((state) => state[Controls.left])
  const rightPressed = useKeyboardControls((state) => state[Controls.right])
  const forwardPressed = useKeyboardControls((state) => state[Controls.forward])
  const backwardPressed = useKeyboardControls((state) => state[Controls.backward])

  // Movement
  const handleMovement = () => {
    if (!isOnFloor) {
      return
    }
    if (rightPressed) {
      player.current.applyImpulse({ x: 0.1, y: 0, z: 0 }, true)
    }
    if (leftPressed) {
      player.current.applyImpulse({ x: -0.1, y: 0, z: 0 }, true)
    }
    if (forwardPressed) {
      player.current.applyImpulse({ x: 0, y: 0, z: -0.1 }, true)
    }
    if (backwardPressed) {
      player.current.applyImpulse({ x: 0, y: 0, z: 0.1 }, true)
    }
  }

  // Update
  useFrame(() => {
    if (jumpPressed && isOnFloor) {
      jump()
    }
    handleMovement()
  })

  return (
    <RigidBody
      ref={player}
      type="dynamic"
      position={[0, 5, 0]}
      colliders={'ball'}
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
    >
      <Sphere>
        <meshStandardMaterial color="hotpink" transparent opacity={0} />
      </Sphere>
    </RigidBody>
  )
}

export default Player
