# System Architecture

This document outlines the architecture of the web application, including the frontend, backend services, database, and external integrations.

## Diagram

```mermaid
graph TD
    subgraph User
        A[Browser]
    end

    subgraph Frontend (Next.js on Vercel/Netlify)
        B(React Components) -- Renders --> C{App Router}
        C -- Manages Routes --> D[Pages & Layouts]
        D -- Uses --> E[UI Components (shadcn/ui)]
        D -- Fetches Data/Invokes --> F[Supabase Client]
    end

    subgraph Backend (Supabase)
        G[Authentication] -- Manages Users --> H{Database (PostgreSQL)}
        I[Edge Functions] -- Securely Connects to --> J[Ayrshare API]
        F -- Interacts with --> G
        F -- Reads/Writes --> H
        F -- Invokes --> I
        H -- Stores Data for --> D
    end

    subgraph External Services
        J[Ayrshare API]
    end

    A -- Interacts with --> B
```

## Components Breakdown

### 1. Frontend (Next.js)
- **Framework**: Next.js with the App Router.
- **UI Components**: Built with `shadcn/ui`, a collection of accessible and composable components on top of Radix UI and Tailwind CSS.
- **State Management**: Primarily uses React hooks (`useState`, `useEffect`) and Context API for global state.
- **Data Fetching**: The `Supabase Client` (`@supabase/supabase-js`) is used for all interactions with the backend, including authentication, database queries, and invoking Edge Functions.

### 2. Backend (Supabase)
- **Authentication**: Supabase Auth handles user sign-up, sign-in, and session management using JWTs. Row Level Security (RLS) in the database is tied to user authentication.
- **Database**: A PostgreSQL database managed by Supabase. It stores all application data, such as user profiles, posts, and settings.
- **Edge Functions**: Serverless Deno functions that run geographically close to the user. They are used for secure operations that require secret keys, such as communicating with the Ayrshare API.
  - `send-ayrshare-post`: A function that takes post data from the client and forwards it to the Ayrshare API using a secure, server-side API key.

### 3. External Integrations
- **Ayrshare**: A third-party API used to distribute content to multiple social media platforms. The application communicates with Ayrshare via a Supabase Edge Function to protect the API key.

## Data & Authentication Flow

1.  **User Authentication**:
    - A user signs up or logs in via the frontend UI.
    - The Supabase client communicates with Supabase Auth.
    - Upon success, a JWT is returned and stored in the browser.
    - Subsequent requests to Supabase include this JWT, allowing the backend to identify the user and enforce Row Level Security policies on database queries.

2.  **Creating a Social Post**:
    - The user creates a post in the frontend application.
    - On submission, the frontend calls the `send-ayrshare-post` Supabase Edge Function, passing the post content.
    - The Edge Function receives the request, validates it, and then makes a secure, server-to-server API call to the Ayrshare API using the stored `AYRSHARE_API_KEY`.
    - The result from Ayrshare is returned to the Edge Function, which then passes it back to the client.