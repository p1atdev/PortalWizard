import { useState } from "react"
import { invoke } from "@tauri-apps/api/tauri"
import Image from "next/image"

const Page = () => {
    return (
        <div className="p-8">
            <p className="text-8xl">Welcome to Tauri!</p>
        </div>
    )
}

export default Page
