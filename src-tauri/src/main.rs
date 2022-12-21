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
        .invoke_handler(tauri::generate_handler![
            cmd::auto_config,
            cmd::auto_v1_sd_models
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
