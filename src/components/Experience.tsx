import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/rapier'
import CharacterController from './player/CharacterController.tsx'
import Ground from './ground/Ground.tsx'

const Experience = () => {
  return (
    <>
      <Sky sunPosition={[100, 20, 100]} />
      <ambientLight intensity={1} />
      <directionalLight position={[0, 5, -5]} intensity={1} castShadow color={'#ffffff'} />
      <Physics debug gravity={[0, -40, 0]}>
        <CharacterController />
        <Ground />
      </Physics>
    </>
  )
}

export default Experience
