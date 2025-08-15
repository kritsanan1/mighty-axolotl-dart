# Project Structure Analysis

This document analyzes the current project structure and provides recommendations for refactoring to a more scalable, feature-based organization.

## Current Organization (Type-Based)

The current structure groups files by their type, which is common for small projects but can become difficult to manage as the application grows.

```
/src
├── /app
│   └── (core routing files)
├── /components
│   └── /ui
│       ├── button.tsx
│       └── card.tsx
├── /integrations
│   └── /supabase
│       └── client.ts
└── /lib
    ├── ayrshare.ts
    └── utils.ts
```

**Pros:**
- Simple to understand initially.
- Easy to find a file if you know its type (e.g., all components are in `/components`).

**Cons:**
- Low cohesion: Files related to a single feature (e.g., "authentication") are scattered across multiple directories.
- High coupling: It's hard to see which components, hooks, and utilities belong to which feature.
- Difficult to scale: Adding a new feature requires creating files in many different places.

## Recommended Organization (Feature-Based)

A feature-based (or "feature-sliced") structure groups all files related to a single domain entity or feature together. This improves modularity and makes the codebase easier to navigate and maintain.

```
/src
├── /app
│   └── (core routing files)
├── /components
│   └── /ui  (Only for truly global, reusable UI primitives)
│       ├── button.tsx
│       └── card.tsx
├── /features
│   ├── /auth
│   │   ├── /components
│   │   │   └── LoginForm.tsx
│   │   ├── /hooks
│   │   │   └── useAuth.ts
│   │   └── index.ts (public API for the feature)
│   ├── /posts
│   │   ├── /components
│   │   │   ├── PostCard.tsx
│   │   │   └── CreatePostForm.tsx
│   │   ├── /api
│   │   │   └── ayrshare.ts
│   │   └── index.ts
├── /integrations
│   └── /supabase
│       └── client.ts
└── /lib
    └── utils.ts (Only for generic, app-wide utilities)
```

**Pros:**
- **High Cohesion:** All files for a feature are co-located.
- **Low Coupling:** Features are self-contained modules and can be developed or refactored with minimal impact on other parts of the app.
- **Scalability:** Adding or removing a feature is as simple as adding or removing its directory.

## Migration Guide

1.  **Create `/src/features` directory:** This will be the new home for all feature-specific logic.
2.  **Identify Features:** Identify the core domains of your application (e.g., `auth`, `posts`, `settings`).
3.  **Relocate Files:** Move components, hooks, API clients, and types from their current locations (`/components`, `/lib`) into the appropriate feature directory.
    - **Example:** Move `src/lib/ayrshare.ts` to `src/features/posts/api/ayrshare.ts`.
4.  **Update Imports:** Adjust all import paths across the application to point to the new file locations.
5.  **Refine Shared Code:** Keep only truly generic components in `/src/components/ui` and truly generic functions in `/src/lib/utils.ts`.