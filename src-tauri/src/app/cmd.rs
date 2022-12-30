use crate::app::api;
use serde_json::json;
use tauri::command;

#[command]
pub async fn sdapi(host: String, path: String, method: String, body: Option<String>) -> String {
    let body = api::AUTO1111API::sdapi(&host, &path, &method, body).await;

    match body {
        Ok(body) => json!({ "status": "success", "message": body }).to_string(),
        Err(e) => json!({ "status": "error", "message": e.to_string() }).to_string(),
    }
}
