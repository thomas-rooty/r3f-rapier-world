import styles from './App.module.css'
import { KeyboardControls, PointerLockControls, Sky } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import Ground from './components/ground/Ground.tsx'
import Player from './components/player/Player.tsx'
import { useMemo } from 'react'

export const Controls = {
  forward: 'forward',
  backward: 'backward',
  left: 'left',
  right: 'right',
  jump: 'jump',
  sprint: 'sprint',
}

function App() {
  const map = useMemo(
    () => [
      { name: Controls.forward, keys: ['ArrowUp', 'w', 'W'] },
      { name: Controls.backward, keys: ['ArrowDown', 's', 'S'] },
      { name: Controls.left, keys: ['ArrowLeft', 'a', 'A'] },
      { name: Controls.right, keys: ['ArrowRight', 'd', 'D'] },
      { name: Controls.jump, keys: ['Space'] },
    ],
    []
  )

  return (
    <main className={styles.main}>
      <KeyboardControls map={map}>
        <Canvas shadows camera={{ fov: 60 }}>
          <Sky sunPosition={[100, 20, 100]} />
          <ambientLight intensity={1} />
          <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
          <Physics debug gravity={[0, -10, 0]}>
            <Player />
            <Ground />
          </Physics>
          <PointerLockControls />
        </Canvas>
      </KeyboardControls>
    </main>
  )
}

export default App
