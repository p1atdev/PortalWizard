import { invoke } from "@tauri-apps/api/tauri"

export interface SDAPIOptions {
  host: string
  path: string
  method: "GET" | "POST" | "PUT" | "DELETE"
  body?: string
  auth?: {
    username: string
    password: string
  }
}

export interface SDAPIRes {
  status: "error" | "success"
  message: string
}

export const invokeSDAPI = async (options: SDAPIOptions) => {
  const res: string = await invoke("sdapi", {
    host: options.host,
    path: options.path,
    method: options.method,
    body: options.body,
  })

  const json: SDAPIRes = JSON.parse(res)

  switch (json.status) {
    case "success": {
      return JSON.parse(json.message)
    }
    case "error": {
      throw new Error(json.message)
    }
  }
}
