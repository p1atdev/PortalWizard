import { useState } from "react"
import { invoke } from "@tauri-apps/api/tauri"
import { useAUTO1111 } from "../hooks/auto1111"
import { AUTO1111V1SDModels } from "../types/mod"
import HostField from "../components/parameters/hostField"
import SDModelWidget from "../components/parameters/sdModels"
import SamplerWidget from "../components/parameters/sampler"

function App() {
  const [config, setConfig] = useState("")
  const [host, setHost] = useState("http://localhost:7861")
  const { v1 } = useAUTO1111({ host })

  const [models, setModels] = useState<AUTO1111V1SDModels>([])

  async function getModels() {
    const models = await v1.sdModels()
    setModels(models)
  }

  return (
    <div className="flex h-[100dvh] w-full overflow-hidden">
      <div className="hidden w-[240px] xl:block"></div>

      <div className="w-[1px] bg-gray-300" />

      <div className="flex flex-1 flex-col">
        <div className="min-h-[64px]"></div>

        <div className="h-[1px] bg-gray-300" />

        <div className="flex shrink grow flex-col">
          <div className="grid shrink grow place-content-center">
            <img
              className="h-full max-h-[640px] object-contain p-8"
              src="/sample.png"
            />
          </div>

          <div className="flex justify-between p-2">
            <p>25/75</p>

            <button className="py-1 px-2" onClick={getModels}>
              Generate
            </button>
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

      <div className="relative flex w-[300px] flex-col overflow-x-hidden overflow-y-scroll">
        {/* <div className="px-4 py-2">
          <p>Model</p>
          <p className="py-1 text-lg font-semibold">
            {models[1] ? models[1].model_name : "None"}
          </p>
        </div> */}
        <SDModelWidget />
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

        <SamplerWidget />

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

        <div className="px-4 py-2">
          <p>Test</p>
          <p className="py-1">{config}</p>
        </div>

        <HostField initialHost={host} onChange={() => {}} />
      </div>
    </div>
  )
}

export default App
