import { useState } from "react"
import { invoke } from "@tauri-apps/api/tauri"

function App() {
  const [greetMsg, setGreetMsg] = useState("")
  const [name, setName] = useState("")

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }))
  }

  return (
    <div className="flex h-[100dvh] w-full overflow-hidden">
      <div className="hidden w-[240px] xl:block"></div>

      <div className="w-[1px] bg-gray-300" />

      <div className="flex flex-1 flex-col">
        <div className="h-[64px]"></div>

        <div className="h-[1px] bg-gray-300" />

        <div className="flex flex-1 flex-col">
          <div className="grid flex-1 place-content-center ">
            <img
              className="max-h-[640px] object-contain p-8 md:max-h-[900px] xl:max-w-[640px] xl:p-4"
              src="/sample.png"
            />
          </div>

          <div className="flex justify-between p-2">
            <p>25/75</p>

            <button className="py-1 px-2">Generate</button>
          </div>
        </div>

        <div className="h-[1px] bg-gray-300" />

        <div className="h-[120px]">
          <textarea
            className="h-full w-full resize-none py-1 px-2"
            placeholder="prompt here..."
          />
        </div>
      </div>

      <div className="w-[1px] bg-gray-300" />

      <div className="relative flex w-[300px] flex-col">
        <div className="px-4 py-2">
          <p>Model</p>
          <p className="py-1 text-lg font-semibold">derrida_full.ckpt</p>
        </div>
        <div className="px-4 py-2">
          <p>VAE</p>
          <p className="py-1 text-lg font-semibold">auto</p>
        </div>

        <div className="px-4 py-2">
          <p>Seed</p>
          <p className="py-1 text-lg font-semibold">-1</p>
        </div>

        <div className="flex px-4 py-2">
          <div className="flex-1">
            <p>Steps</p>
            <p className="py-1 text-lg font-semibold">20</p>
          </div>
          <div className="flex-1">
            <p>Scale</p>
            <p className="py-1 text-lg font-semibold">7.0</p>
          </div>
        </div>

        <div className="px-4 py-2">
          <p>Sampler</p>
          <p className="py-1 text-lg font-semibold">DPM++ 2M</p>
        </div>

        <div className="px-4 py-2">
          <p>Art preset</p>
          <p className="py-1 text-lg font-semibold">None</p>
        </div>

        <div className="px-4 py-2">
          <p>Negative Prompt</p>
          <p className="py-1">
            lowres, bad anatomy, bad hands, text, error, missing fingers, extra
            digit, fewer digits, cropped, worst quality, low quality, normal
            quality, jpeg artifacts, signature, watermark, username, blurry
          </p>
        </div>

        <div className="absolute bottom-0 z-10 grid h-[64px] w-full place-items-center border-t-[1px] border-gray-300">
          <div>
            <p>Disconnect</p>
            <div className="my-auto flex w-full items-center">
              <p>OK</p>
              <input
                className="px-4 text-lg"
                placeholder="http://localhost:8760"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
