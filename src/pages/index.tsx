import { useState } from "react"
import { invoke } from "@tauri-apps/api/tauri"
import Image from "next/image"

const Page = () => {
  return (
    <div className="h-full w-full">
      <div className="flex h-full gap-4">
        <div className="w-32"></div>
        <div className="w-[1px] bg-gray-300 dark:bg-red-500" />
        <div className="flex-1"></div>
        <div className="w-[1px] bg-gray-300" />
        <div className="w-[256px]"></div>
      </div>
    </div>
  )
}

export default Page
