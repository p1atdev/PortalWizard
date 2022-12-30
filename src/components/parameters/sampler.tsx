import { useRecoilState } from "recoil"
import { AUTO1111Atom } from "../../atoms/auto1111"
import { Listbox, Transition } from "@headlessui/react"
import { AUTO1111V1SDModel } from "../../types/mod"
import ItemSelector from "./itemSelector"

const SamplerWidget = () => {
  const [state, setState] = useRecoilState(AUTO1111Atom)

  const updateSelectedSampler = (sampler) => {
    setState((oldState) => {
      return {
        ...oldState,
        selectedSamplerName: sampler,
      }
    })
  }

  return (
    <div className="px-4 py-2">
      <p>Sampler</p>

      <ItemSelector
        items={state.samplers.map((sampler) => {
          return {
            key: sampler.name,
            value: sampler.name,
          }
        })}
        selectedItemValue={state.selectedSamplerName}
        onChange={updateSelectedSampler}
      />
    </div>
  )
}

export default SamplerWidget
