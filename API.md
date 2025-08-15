# API Reference

This document provides details on the API endpoints available in this application, which are implemented as Supabase Edge Functions.

## Base URL

All Edge Function endpoints are prefixed with your Supabase project URL:
`https://<your-project-id>.supabase.co/functions/v1`

---

## Edge Functions

### `send-ayrshare-post`

This function securely sends a post to the Ayrshare API to be distributed across social media platforms.

- **Endpoint:** `POST /send-ayrshare-post`
- **Authentication:** Requires a valid JWT from an authenticated Supabase user. The Supabase client libraries handle this automatically.

#### Request Body

The request body must be a JSON object with the following structure:

```json
{
  "post": "This is the content of my social media post!",
  "platforms": ["twitter", "linkedin"],
  "media_urls": ["https://example.com/image.png"]
}
```

- `post` (string, required): The text content of the post.
- `platforms` (string[], required): An array of social media platforms to post to (e.g., "twitter", "facebook", "linkedin").
- `media_urls` (string[], optional): An array of URLs for images or videos to include in the post.

#### Responses

- **`200 OK`**: The post was successfully sent to Ayrshare. The response body will contain the result from the Ayrshare API.
  ```json
  {
    "status": "success",
    "postIds": ["..."]
  }
  ```

- **`400 Bad Request`**: The request body is missing required fields or is improperly formatted.
  ```json
  {
    "error": "Missing required field: post"
  }
  ```

- **`401 Unauthorized`**: The request was made without a valid user session.

- **`500 Internal Server Error`**: An unexpected error occurred on the server, such as an issue communicating with the Ayrshare API.
  ```json
  {
    "error": "Failed to post to Ayrshare"
  }
  ```