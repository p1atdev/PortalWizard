use crate::conf;
use reqwest;

pub struct Fetch {}

impl Fetch {
    pub async fn get(url: &str) -> Result<String, reqwest::Error> {
        let client = reqwest::Client::new();
        let res = client
            .get(url)
            .header(reqwest::header::USER_AGENT, conf::USER_AGENT)
            .send()
            .await?;
        let body = res.text().await?;
        Ok(body)
    }

    pub async fn post(url: &str, body: &str) -> Result<String, reqwest::Error> {
        let client = reqwest::Client::new();
        let res = client
            .post(url)
            .header(reqwest::header::USER_AGENT, conf::USER_AGENT)
            .header(reqwest::header::CONTENT_TYPE, conf::CONTENT_TYPE_JSON)
            .body(body.to_string())
            .send()
            .await?;
        let body = res.text().await?;
        Ok(body)
    }
}
