use crate::app::api;
use tauri::command;

#[command]
pub async fn auto_config(host: String) -> String {
    let body = api::AUTO1111API::config(&host).await.unwrap();
    body
}

#[command]
pub async fn auto_v1_options(host: String) -> String {
    let body = api::AUTO1111API::v1_options(&host).await.unwrap();
    body
}

#[command]
pub async fn auto_v1_samplers(host: String) -> String {
    let body = api::AUTO1111API::v1_samplers(&host).await.unwrap();
    body
}

#[command]
pub async fn auto_v1_sd_models(host: String) -> String {
    let body = api::AUTO1111API::v1_sd_models(&host).await.unwrap();
    body
}

#[command]
pub async fn auto_v1_progress(host: String) -> String {
    let body = api::AUTO1111API::v1_progress(&host).await.unwrap();
    body
}
