import { invoke } from "@tauri-apps/api/tauri"
import {
  AUTO1111V1Options,
  AUTO1111V1Samplers,
  AUTO1111V1SDModels,
  AUTO1111V1Progress,
} from "../types/mod"

interface AUTO111Options {
  host: string
}

const AUTO111Keys = {
  v1: {
    options: "auto_v1_options",
    samplers: "auto_v1_samplers",
    models: "auto_v1_sd_models",
    progress: "auto_v1_progress",
  },
  config: "auto_config",
}

export const useAUTO1111 = ({ host }: AUTO111Options) => {
  const config = async (): Promise<string> => {
    return await invoke(AUTO111Keys.config, { host })
  }

  const v1_samplers = async (): Promise<AUTO1111V1Samplers> => {
    const body: string = await invoke(AUTO111Keys.v1.samplers, { host })
    const json: AUTO1111V1Samplers = JSON.parse(body)
    return json
  }

  const v1_sd_models = async (): Promise<AUTO1111V1SDModels> => {
    const body: string = await invoke(AUTO111Keys.v1.models, { host })
    const json: AUTO1111V1SDModels = JSON.parse(body)
    return json
  }

  const v1_options = async (): Promise<AUTO1111V1Options> => {
    const body: string = await invoke(AUTO111Keys.v1.options, { host })
    const json: AUTO1111V1Options = JSON.parse(body)
    return json
  }

  const v1_progress = async (): Promise<AUTO1111V1Progress> => {
    const body: string = await invoke(AUTO111Keys.v1.progress, { host })
    const json: AUTO1111V1Progress = JSON.parse(body)
    return json
  }

  return {
    config,
    v1_options,
    v1_samplers,
    v1_sd_models,
    v1_progress,
  }
}
