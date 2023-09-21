import { useRef } from 'react'
import { Controls } from '../../App.tsx'
import { RigidBody } from '@react-three/rapier'
import { Sphere, useKeyboardControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useCharacterStore } from '../../../stores/character.store.ts'

const Player = () => {
  const player = useRef<any>()

  const jump = () => {
    player.current.applyImpulse({ x: 0, y: 2, z: 0 }, true)
  }

  const jumpPressed = useKeyboardControls((state) => state[Controls.jump])
  const setIsOnFloor = useCharacterStore((state) => state.setIsOnFloor)
  const isOnFloor = useCharacterStore((state) => state.isOnFloor)

  useFrame(() => {
    if (jumpPressed && isOnFloor) {
      jump()
    }
  })

  return (
    <RigidBody
      ref={player}
      type="dynamic"
      position={[3, 5, 0]}
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
      <Sphere onClick={jump} onPointerDown={jump} onPointerUp={jump}>
        <meshStandardMaterial color="royalblue" />
      </Sphere>
    </RigidBody>
  )
}

export default Player
