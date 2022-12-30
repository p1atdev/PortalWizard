import { useRecoilState } from "recoil"
import { AUTO1111Atom } from "../atoms/auto1111"
import {
  AUTO1111V1Options,
  AUTO1111V1Samplers,
  AUTO1111V1SDModels,
  AUTO1111V1Progress,
  invokeSDAPI,
  SDAPIOptions,
  ConnectionState,
  SecurityState,
} from "../types/mod"

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
  const [auto1111State, setAUTO1111State] = useRecoilState(AUTO1111Atom)

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

  const connect = async (): Promise<{
    connection: ConnectionState
    security: SecurityState
  }> => {
    // check models
    try {
      const models = await v1.sdModels()
      const samplers = await v1.samplers()

      setAUTO1111State((state) => {
        return {
          ...state,
          models,
          selectedModelName:
            state.selectedModelName === ""
              ? models[0]
                ? models[0].model_name
                : "None"
              : state.selectedModelName,
          samplers,
          selectedSamplerName:
            state.selectedSamplerName === ""
              ? samplers[0]
                ? samplers[0].name
                : "None"
              : state.selectedSamplerName,
        }
      })

      if (host.startsWith("https://")) {
        return {
          connection: "connected",
          security: "secure",
        }
      } else {
        return {
          connection: "connected",
          security: "insecure",
        }
      }
    } catch {
      return {
        connection: "disconnected",
        security: "unknown",
      }
    }
  }

  return {
    v1,
    connect,
  }
}
