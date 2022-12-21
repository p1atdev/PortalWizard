use crate::app::api;
use tauri::command;

#[command]
pub async fn auto_config(host: String) -> String {
    let body = api::AUTO1111API::config(&host).await.unwrap();
    body
}

#[command]
pub async fn auto_v1_sd_models(host: String) -> String {
    let body = api::AUTO1111API::v1_sd_models(&host).await.unwrap();
    body
}
