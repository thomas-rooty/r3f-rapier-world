import { PointerLockControls, Sky } from '@react-three/drei'
import { Physics } from '@react-three/rapier'
import Player from './player/Player.tsx'
import Ground from './ground/Ground.tsx'

const Experience = () => {
  return (
    <>
      <Sky sunPosition={[100, 20, 100]} />
      <ambientLight intensity={1} />
      <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
      <PointerLockControls />
      <Physics debug gravity={[0, -10, 0]}>
        <Player />
        <Ground />
      </Physics>
    </>
  )
}

export default Experience
