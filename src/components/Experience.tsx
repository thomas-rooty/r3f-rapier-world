import { Sky } from '@react-three/drei'
import Ground from './ground/Ground.tsx'
import CharacterController from './player/CharacterController.tsx'
import { SampleSphere } from './objects/SampleSphere.tsx'

const Experience = () => {
  return (
    <>
      {/* LIGHTS */}
      <Sky sunPosition={[100, 20, 100]} />
      <ambientLight intensity={1} />
      <directionalLight position={[0, 5, -5]} intensity={1} castShadow color={'#ffffff'} />

      {/* CHARACTER */}
      <CharacterController />

      {/* STAGE */}
      <Ground />
      <SampleSphere />
    </>
  )
}

export default Experience
