import { useRecoilState } from "recoil"
import { AUTO1111Atom } from "../../atoms/auto1111"
import { Listbox, Transition } from "@headlessui/react"
import { AUTO1111V1SDModel } from "../../types/mod"
import ItemSelector from "./itemSelector"

const SDModelWidget = () => {
  const [state, setState] = useRecoilState(AUTO1111Atom)

  const updateSelectedModel = (model) => {
    setState((oldState) => {
      return {
        ...oldState,
        selectedModelName: model,
      }
    })
  }

  return (
    <div className="px-4 py-2">
      <p>Model</p>

      <ItemSelector
        items={state.models.map((model) => {
          return {
            key: model.model_name,
            value: model.model_name,
          }
        })}
        selectedItemValue={state.selectedModelName}
        onChange={updateSelectedModel}
      />
    </div>
  )
}

export default SDModelWidget
