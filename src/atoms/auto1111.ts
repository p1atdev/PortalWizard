import { atom, selector, useRecoilState, useRecoilValue } from "recoil"
import { AUTO1111V1Samplers, AUTO1111V1SDModels } from "../types/mod"

interface AUTO1111State {
  prompt: string
  negativePrompt: string
  models: AUTO1111V1SDModels
  selectedModelName: string
  seed: number
  steps: number
  scale: number
  samplers: AUTO1111V1Samplers
  selectedSamplerName: string
  progress: number
}

const defaultState: AUTO1111State = {
  prompt: "",
  negativePrompt: "",
  models: [],
  selectedModelName: "",
  seed: -1,
  steps: 20,
  scale: 7.0,
  samplers: [],
  selectedSamplerName: "",
  progress: 0,
}

export const AUTO1111Atom = atom<AUTO1111State>({
  key: "auto1111",
  default: defaultState,
})
