use crate::conf::{CONTENT_TYPE_JSON, USER_AGENT};
use reqwest::header;
use reqwest::{Client, Method};

pub struct AUTO1111API {}

impl AUTO1111API {
    pub async fn sdapi(
        host: &str,
        path: &str,
        method: &str,
        body: Option<String>,
    ) -> Result<String, reqwest::Error> {
        let client = Client::new();
        let url = format!("{}{}", host, path);

        // HTTPメソッドを決定する
        let request_method = match method {
            "GET" => Method::GET,
            "POST" => Method::POST,
            "PUT" => Method::PUT,
            "DELETE" => Method::DELETE,
            _ => Method::GET, // デフォルトはGET
        };

        // HTTPリクエストを作成する
        let mut request = client.request(request_method, &url);

        // bodyが指定されている場合は、リクエストに追加する
        if let Some(b) = body {
            request = request.body(b);
            request = request.header(header::CONTENT_TYPE, CONTENT_TYPE_JSON);
        }

        request = request.header(header::USER_AGENT, USER_AGENT);

        // HTTPリクエストを送信する
        let response = request.send().await?;

        Ok(response.text().await?)
    }
}
