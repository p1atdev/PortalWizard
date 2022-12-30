use crate::utils::Fetch;

pub struct AUTO1111API {}

impl AUTO1111API {
    pub async fn config(host: &str) -> Result<String, reqwest::Error> {
        let url = format!("{}/config", host);
        let body = Fetch::get(&url).await?;
        Ok(body)
    }

    pub async fn v1_options(host: &str) -> Result<String, reqwest::Error> {
        let url = format!("{}/sdapi/v1/options", host);
        let body = Fetch::get(&url).await?;
        Ok(body)
    }

    pub async fn v1_samplers(host: &str) -> Result<String, reqwest::Error> {
        let url = format!("{}/sdapi/v1/samplers", host);
        let body = Fetch::get(&url).await?;
        Ok(body)
    }

    pub async fn v1_sd_models(host: &str) -> Result<String, reqwest::Error> {
        let url = format!("{}/sdapi/v1/sd-models", host);
        let body = Fetch::get(&url).await?;
        Ok(body)
    }

    pub async fn v1_progress(host: &str) -> Result<String, reqwest::Error> {
        let url = format!("{}/sdapi/v1/progress", host);
        let body = Fetch::get(&url).await?;
        Ok(body)
    }
}
