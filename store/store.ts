import {create} from 'zustand'

export interface Work {
    id: number;
    label: string;
    subLabel: string;
    color: string | string[];
    image: string;
    bg:string
}

interface StoreState {
  activeWork: number | null
  scrollProgress: number;
  setScroll: (p: number) => void;
  modelColor: string | string[]
  bgImage: string | null;
  bg: string | null;
  setActiveWork: (work: Work) => void
  resetColor:() => void;
}

export const useStore = create<StoreState>((set) => ({
  activeWork: null,
  modelColor: '#DAA520',
  bgImage: null,
  bg: null,
  scrollProgress: 0,
  setScroll: (p) => set({ scrollProgress: p }),
  setActiveWork: (work) =>
    set({
      activeWork: work.id,
      modelColor: work.color,
      bgImage: work.image,
      bg:work.bg
    }),
     resetColor: () => set({ activeWork: null, modelColor: "#DAA520", bg:null, bgImage: null })
}))
