import styles from './App.module.css'
import { Suspense, useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import { KeyboardControls, Stats } from '@react-three/drei'
import Experience from './components/Experience.tsx'

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
          <Stats />
          <Suspense fallback={null}>
            <Physics debug gravity={[0, -40, 0]}>
              <Experience />
            </Physics>
          </Suspense>
        </Canvas>
      </KeyboardControls>
    </main>
  )
}

export default App
