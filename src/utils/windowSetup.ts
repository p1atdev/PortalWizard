import { appWindow, PhysicalSize } from "@tauri-apps/api/window"

export const setup = async () => {
  await appWindow.setMinSize(new PhysicalSize(640, 640))
}
