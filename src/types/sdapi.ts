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

export const invokeSDAPI = async (options: SDAPIOptions) => {
  const res: string = await invoke("sdapi", {
    host: options.host,
    path: options.path,
    method: options.method,
    body: options.body,
  })

  const json = JSON.parse(res)

  return json
}
