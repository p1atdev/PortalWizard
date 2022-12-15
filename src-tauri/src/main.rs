#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            tauri::WindowBuilder::new(
                app,
                "portal_wizard", // the unique label
                tauri::WindowUrl::App("index.html".into()),
            )
            .title("Portal Wizard")
            .resizable(true)
            .min_inner_size(640.0, 640.0)
            .build()
            .expect("failed to create window");
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
