# Database Schema

This document outlines the structure of the key tables in the application's PostgreSQL database, which is managed by Supabase. All tables have Row Level Security (RLS) enabled to ensure data privacy.

---

### Table: `profiles`

Stores public user profile information, linked to the `auth.users` table.

| Column       | Type                      | Description                                      |
|--------------|---------------------------|--------------------------------------------------|
| `id`         | `uuid` (Primary Key)      | Foreign key to `auth.users.id`.                  |
| `first_name` | `text` (nullable)         | The user's first name.                           |
| `last_name`  | `text` (nullable)         | The user's last name.                            |
| `avatar_url` | `text` (nullable)         | URL for the user's profile picture.              |
| `updated_at` | `timestamp with time zone`| Timestamp of the last update.                    |

**RLS Policies:**
- Users can read all profiles.
- Users can only insert, update, or delete their own profile.

---

### Table: `social_posts`

Stores information about social media posts created by users.

| Column         | Type                      | Description                                      |
|----------------|---------------------------|--------------------------------------------------|
| `id`           | `uuid` (Primary Key)      | Unique identifier for the post.                  |
| `user_id`      | `uuid` (Foreign Key)      | References `auth.users.id`.                      |
| `content`      | `text`                    | The text content of the post.                    |
| `platforms`    | `text[]`                  | Array of platforms to publish to (e.g., `{"twitter"}`). |
| `media_urls`   | `text[]` (nullable)       | Array of URLs for associated media.              |
| `status`       | `text`                    | The current status (e.g., `draft`, `published`). |
| `published_at` | `timestamp with time zone`| Timestamp when the post was published.           |
| `created_at`   | `timestamp with time zone`| Timestamp of creation.                           |

**RLS Policies:**
- Users can only view, create, update, and delete their own social posts.

---

### Table: `assets`

Stores references to user-uploaded media files.

| Column          | Type                      | Description                                      |
|-----------------|---------------------------|--------------------------------------------------|
| `id`            | `uuid` (Primary Key)      | Unique identifier for the asset.                 |
| `user_id`       | `uuid` (Foreign Key)      | References `auth.users.id`.                      |
| `name`          | `text`                    | The name of the file.                            |
| `type`          | `text`                    | The file type (e.g., `image`, `video`).          |
| `file_url`      | `text` (nullable)         | The public URL to the file in Supabase Storage.  |
| `thumbnail_url` | `text` (nullable)         | The URL for a smaller thumbnail image.           |
| `starred`       | `boolean`                 | Whether the user has starred this asset.         |
| `created_at`    | `timestamp with time zone`| Timestamp of creation.                           |

**RLS Policies:**
- Users can only view, create, update, and delete their own assets.