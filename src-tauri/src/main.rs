#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

mod app;
mod conf;
mod utils;

use app::cmd;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![cmd::sdapi,])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
