import { create } from 'zustand'

interface CharacterState {
  position: [number, number, number]
  setPosition: (position: [number, number, number]) => void
}

export const useCharacterStore = create<CharacterState>((set) => ({
  position: [0, 0, 0],
  setPosition: (position) => set({ position }),
}))
