import { invoke } from "@tauri-apps/api/tauri"

interface AUTO111Options {
  host: string
}

const AUTO111Keys = {
  v1: {
    models: "auto_v1_sd_models",
  },
  config: "auto_config",
}

export const useAUTO1111 = ({ host }: AUTO111Options) => {
  const v1_sd_models = async (): Promise<string> => {
    return await invoke(AUTO111Keys.v1.models, { host })
  }

  return {
    v1_sd_models,
  }
}
