import { create } from 'zustand'

interface CharacterState {
  isOnFloor: boolean
  setIsOnFloor: (isOnFloor: boolean) => void
}

export const useCharacterStore = create<CharacterState>((set) => ({
  isOnFloor: true,
  setIsOnFloor: (isOnFloor) => set({ isOnFloor }),
}))
