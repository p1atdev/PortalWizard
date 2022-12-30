import {
  AUTO1111V1Options,
  AUTO1111V1Samplers,
  AUTO1111V1SDModels,
  AUTO1111V1Progress,
} from "../types/mod"
import { invokeSDAPI, SDAPIOptions } from "../types/sdapi"

interface AUTO111Options {
  host: string
}

const AUTO111Keys = {
  v1: {
    options: "/sdapi/v1/options",
    samplers: "/sdapi/v1/samplers",
    models: "/sdapi/v1/sd-models",
    progress: "/sdapi/v1/progress",
  },
}

export const useAUTO1111 = ({ host }: AUTO111Options) => {
  const invoke = async (options: Omit<SDAPIOptions, "host" | "auth">) => {
    return await invokeSDAPI({
      host,
      path: options.path,
      method: options.method,
      body: options.body,
    })
  }

  const v1 = {
    samplers: async (): Promise<AUTO1111V1Samplers> => {
      const res: AUTO1111V1Samplers = await invoke({
        path: AUTO111Keys.v1.samplers,
        method: "GET",
      })
      return res
    },

    sdModels: async (): Promise<AUTO1111V1SDModels> => {
      const res: AUTO1111V1SDModels = await invoke({
        path: AUTO111Keys.v1.models,
        method: "GET",
      })
      return res
    },

    options: async (): Promise<AUTO1111V1Options> => {
      const res: AUTO1111V1Options = await invoke({
        path: AUTO111Keys.v1.options,
        method: "GET",
      })
      return res
    },

    progress: async (): Promise<AUTO1111V1Progress> => {
      const res: AUTO1111V1Progress = await invoke({
        path: AUTO111Keys.v1.progress,
        method: "GET",
      })
      return res
    },
  }

  return {
    v1,
  }
}
