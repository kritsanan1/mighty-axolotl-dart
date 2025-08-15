# File Structure Analysis

This document provides a detailed breakdown of the project's file structure. Each file includes a complexity indicator based on its number of imports:
- 🟢 **Low Complexity** (0-3 imports)
- 🟡 **Medium Complexity** (4-7 imports)
- 🔴 **High Complexity** (8+ imports)

---

### / (Root)
- `.env.example`: 🟢 Template for environment variables.
- `.gitignore`: 🟢 Specifies intentionally untracked files to ignore.
- `README.md`: 🟢 The main project documentation file.
- `architecture.md`: 🟢 Text-based description of the system architecture.
- `next-env.d.ts`: 🟢 TypeScript declaration file for Next.js.
- `next.config.mjs`: 🟢 Configuration file for the Next.js framework.
- `package.json`: 🟡 Defines project metadata and dependencies.
- `postcss.config.js`: 🟢 Configuration for PostCSS (used by Tailwind CSS).
- `tailwind.config.ts`: 🟡 Configuration file for Tailwind CSS.
- `tsconfig.json`: 🟡 TypeScript compiler options for the project.

### /src
- **`/app`**
  - `favicon.ico`: 🟢 The icon for the browser tab.
  - `globals.css`: 🟢 Global styles and Tailwind CSS layer directives.
  - `layout.tsx`: 🟡 The root layout component for the entire application.
  - `page.tsx`: 🟡 The main entry page component for the application.
- **`/components`**
  - **`/ui`**
    - `accordion.tsx`: 🟡 A vertically stacked set of interactive headings that each reveal a section of content.
    - `alert-dialog.tsx`: 🔴 A modal dialog that interrupts the user with important content and expects a response.
    - `alert.tsx`: 🟡 A component that displays a short, important message in a way that attracts the user's attention.
    - `aspect-ratio.tsx`: 🟢 A container that maintains a specific aspect ratio.
    - `avatar.tsx`: 🟡 An image element with a fallback for representing a user.
    - `badge.tsx`: 🟢 A small component to highlight information like labels or counts.
    - `breadcrumb.tsx`: 🟡 A navigation component that shows the user's location in a site or app.
    - `button.tsx`: 🟡 A customizable button component with different variants.
    - `calendar.tsx`: 🔴 A component that allows users to select a date from a calendar view.
    - `card.tsx`: 🟢 A container for grouping related content and actions.
    - `carousel.tsx`: 🔴 A slideshow component for cycling through elements.
    - `chart.tsx`: 🟡 A component for rendering charts, wrapping a charting library.
    - `checkbox.tsx`: 🟡 A control that allows the user to select one or more options from a set.
    - `collapsible.tsx`: 🟡 A component that can be expanded or collapsed to show or hide content.
    - `command.tsx`: 🔴 A component for building command menus and search interfaces.
    - `context-menu.tsx`: 🔴 A menu that appears upon right-clicking or long-pressing an element.
    - `dialog.tsx`: 🔴 A window overlaid on either the primary window or another dialog window.
    - `drawer.tsx`: 🔴 A panel that slides in from the edge of the screen.
    - `dropdown-menu.tsx`: 🔴 A menu that displays a list of choices on a temporary surface.
    - `form.tsx`: 🔴 A collection of components for building accessible forms.
    - `hover-card.tsx`: 🟡 A pop-up that displays information when a user hovers over an element.
    - `input-otp.tsx`: 🔴 A component for one-time password input fields.
    - `input.tsx`: 🟢 A basic text input field component.
    - `label.tsx`: 🟢 A component to render an accessible label for form elements.
    - `menubar.tsx`: 🔴 A horizontal menu bar typically located at the top of an application.
    - `navigation-menu.tsx`: 🔴 A collection of links for navigating a website.
    - `pagination.tsx`: 🟡 A component for navigating between pages of content.
    - `popover.tsx`: 🟡 A pop-up that displays content in relation to a trigger element.
    - `progress.tsx`: 🟡 A component to display the progress of a task.
    - `radio-group.tsx`: 🟡 A set of checkable buttons, known as radio buttons, where only one can be selected at a time.
    - `resizable.tsx`: 🟡 A component for creating resizable panel layouts.
    - `scroll-area.tsx`: 🟡 A component that enhances a native scrollbar.
    - `select.tsx`: 🔴 A control that provides a menu of options.
    - `separator.tsx`: 🟢 A visual separator to group content.
    - `sheet.tsx`: 🔴 A dialog that slides in from the side of the screen.
    - `sidebar.tsx`: 🟡 A vertical navigation component.
    - `skeleton.tsx`: 🟢 A placeholder component to indicate loading content.
    - `slider.tsx`: 🟡 A control that allows users to select a value from a range.
    - `sonner.tsx`: 🟡 A component for displaying toast notifications.
    - `switch.tsx`: 🟡 A control that allows the user to toggle between two states.
    - `table.tsx`: 🟡 Components for displaying tabular data.
    - `tabs.tsx`: 🟡 A component for organizing content into different sections.
    - `textarea.tsx`: 🟢 A multi-line text input field.
    - `toggle-group.tsx`: 🟡 A set of two-state buttons that can be toggled on or off.
    - `toggle.tsx`: 🟡 A two-state button that can be either on or off.
    - `tooltip.tsx`: 🟡 A pop-up that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
- **`/integrations`**
  - **`/supabase`**
    - `client.ts`: 🟢 Creates and exports the Supabase client instance for client-side use.
- **`/lib`**
  - `ayrshare.ts`: 🟢 Client-side utility to invoke the Ayrshare Edge Function.
  - `utils.ts`: 🟢 A utility file for shared functions, including `cn` for merging Tailwind classes.

### /supabase
- **`/functions`**
  - **`/send-ayrshare-post`**
    - `index.ts`: 🟡 Supabase Edge Function to handle posting to the Ayrshare API securely.

---

### Statistics
- **Total Files:** 65
- **Complexity Distribution:**
  - 🟢 **Low:** 22
  - 🟡 **Medium:** 24
  - 🔴 **High:** 19