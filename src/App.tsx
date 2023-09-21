import styles from './App.module.css'
import { KeyboardControls, PointerLockControls, Sky } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import Ground from './components/ground/Ground.tsx'

function App() {
  return (
    <main className={styles.main}>
      <KeyboardControls
        map={[
          { name: 'forward', keys: ['ArrowUp', 'w', 'W'] },
          { name: 'backward', keys: ['ArrowDown', 's', 'S'] },
          { name: 'left', keys: ['ArrowLeft', 'a', 'A'] },
          { name: 'right', keys: ['ArrowRight', 'd', 'D'] },
          { name: 'jump', keys: ['Space'] },
        ]}
      >
        <Canvas shadows camera={{ fov: 60 }}>
          <Sky sunPosition={[100, 20, 100]} />
          <ambientLight intensity={1} />
          <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
          <Physics gravity={[0, -30, 0]}>
            <Ground />
          </Physics>
          <PointerLockControls />
        </Canvas>
      </KeyboardControls>
    </main>
  )
}

export default App
