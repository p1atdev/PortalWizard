import { useState } from "react"
import reactLogo from "./assets/react.svg"
import { invoke } from "@tauri-apps/api/tauri"

function App() {
  const [greetMsg, setGreetMsg] = useState("")
  const [name, setName] = useState("")

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }))
  }

  return (
    <div className="flex h-[100dvh] w-full">
      <div className="w-[128px]"></div>

      <div className="w-[1px] bg-gray-300" />

      <div className="flex-1"></div>

      <div className="w-[1px] bg-gray-300" />

      <div className="w-[256px]"></div>
    </div>
  )
}

export default App
