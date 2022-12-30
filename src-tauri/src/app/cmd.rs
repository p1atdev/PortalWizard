use crate::app::api;
use tauri::command;

#[command]
pub async fn sdapi(host: String, path: String, method: String, body: Option<String>) -> String {
    let body = api::AUTO1111API::sdapi(&host, &path, &method, body)
        .await
        .unwrap();
    body
}
