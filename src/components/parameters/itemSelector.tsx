import { useRecoilState } from "recoil"
import { AUTO1111Atom } from "../../atoms/auto1111"
import { Listbox } from "@headlessui/react"

interface Item {
  key: string
  value: string
}

interface Props {
  items: Item[]
  selectedItemValue: string
  onChange: (value: string) => void
}

const ItemSelector = ({ items, selectedItemValue, onChange }: Props) => {
  return (
    <Listbox value={selectedItemValue} onChange={onChange}>
      <Listbox.Button className="text-md w-full py-1 text-left font-semibold">
        {selectedItemValue}
      </Listbox.Button>
      <Listbox.Options className="absolute -mx-2 max-h-60 w-full overflow-y-scroll rounded-md bg-white bg-opacity-50 p-1 text-lg shadow-lg backdrop-blur ">
        {items.map((item) => (
          <Listbox.Option
            className="text-md cursor-pointer p-2 py-1 hover:bg-slate-100"
            key={item.key}
            value={item.value}
          >
            {item.value}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}

export default ItemSelector
