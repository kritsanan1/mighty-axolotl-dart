# Project Title

[Project Description: A brief, one-paragraph summary of what this application does and for whom it is intended.]

## Table of Contents

1.  [Technical Requirements](#technical-requirements)
2.  [Installation Guide](#installation-guide)
3.  [Development Guidelines](#development-guidelines)
4.  [Deployment Process](#deployment-process)

---

## Technical Requirements

### Development Environment
- **Node.js**: `v20.x` or later
- **npm**: `v10.x` or later
- **Git**: `v2.x` or later

### System Dependencies
- A running Supabase project for database, authentication, and edge functions.
- An Ayrshare account and API key for social media posting.

### Environment Variables
Create a `.env.local` file in the project root by copying `.env.example`. Populate it with the following values:

| Variable                          | Description                                           | Example                                                                 |
| --------------------------------- | ----------------------------------------------------- | ----------------------------------------------------------------------- |
| `NEXT_PUBLIC_SUPABASE_URL`        | The unique URL for your Supabase project.             | `https://ljtuzwiokiupxnqxlkxk.supabase.co`                                |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY`   | The anonymous (public) key for your Supabase project. | `eyJhbGciOi...`                                                         |
| `AYRSHARE_API_KEY`                | Your secret API key for the Ayrshare service.         | `ABCDE-FGHIJ-KLMNO-PQRST`                                               |

---

## Installation Guide

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the root of the project and fill in the required variables as described above.

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:3000`.

---

## Development Guidelines

### Code Style
This project uses Prettier for automated code formatting and ESLint for code analysis. Please run the linter before committing your changes:
```bash
npm run lint
```

### Git Workflow
- **Branch Naming:** All branches should follow the format `[type]/[ticket-number]-[description]`.
  - `feat/T-123-add-user-profile-page`
  - `fix/T-456-resolve-login-bug`
  - `chore/T-789-update-dependencies`

- **Pull Requests (PRs):** Use the provided Pull Request template on GitHub. Ensure all sections are filled out, including testing steps and screenshots.

### Code Review
- All PRs require at least one approval from another team member.
- Reviews should focus on correctness, readability, performance, and adherence to project conventions.

---

## Deployment Process

This application is configured for easy deployment on platforms like Vercel or Netlify.

1.  **Connect Git Repository:** Connect your hosting provider to your GitHub repository.
2.  **Configure Build Settings:**
    - **Framework Preset:** Next.js
    - **Build Command:** `npm run build`
    - **Output Directory:** `.next`
3.  **Add Environment Variables:** Add the same environment variables from your `.env.local` file to the project settings on your hosting provider.
4.  **Deploy:** Trigger a new deployment. The provider will automatically build and deploy the application.

### Rollback Procedures
Most hosting providers offer an instant rollback feature. In case of a critical issue, navigate to the project's deployment history and redeploy a previous, stable version.