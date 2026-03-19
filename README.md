# OD Site
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Next.js](https://img.shields.io/badge/Next.js-15+-000000?style=flat-square&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3ECF8E?style=flat-square&logo=supabase&logoColor=white)](https://supabase.com/)
[![License: Polyform NC](https://img.shields.io/badge/License-Polyform%20NC%201.0.0-blue.svg)](https://polyformproject.org/licenses/noncommercial/1.0.0/)
[![Status: Archived](https://img.shields.io/badge/Status-Archived-lightgrey?style=flat-square)](.)
A Next.js web application for managing OD (On-Duty) details, built with Supabase as the backend.

> âš ï¸ **Note:** This project is currently inactive. It was not pursued further due to a lack of proper institutional support, and the repository is now being made public.

## Tech Stack

- **Frontend:** [Next.js](https://nextjs.org/) (React framework)
- **Backend/Database:** [Supabase](https://supabase.com/)
- **Styling:** CSS

## Features (In Progress)

- User authentication (Login)
- Dashboard view
- Add OD details functionality

## Project Structure

```
ODSite/
â”œâ”€â”€ pages/
â”‚   â”œâ”€â”€ _app.js          # Next.js app wrapper
â”‚   â”œâ”€â”€ index.js         # Home page
â”‚   â”œâ”€â”€ login.js         # Login page
â”‚   â”œâ”€â”€ dashboard.js     # Dashboard page
â”‚   â””â”€â”€ add-oddetail.js  # Add OD detail page
â”œâ”€â”€ styles/
â”‚   â””â”€â”€ globals.css      # Global styles
â”œâ”€â”€ utils/
â”‚   â””â”€â”€ supabaseClient.js # Supabase client configuration
â””â”€â”€ package.json
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn
- A Supabase account and project

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/ODSite.git
   cd ODSite
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   
   Create a `.env.local` file in the root directory with your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server

## Contributing

This project is a work in progress. Contributions, issues, and feature requests are welcome!

## License

Copyright © 2026 Sricharan Suresh (github.com/verycareful)

This project is licensed under the **[Polyform Noncommercial License 1.0.0](https://polyformproject.org/licenses/noncommercial/1.0.0/)**.
You may use, copy, and modify this software for non-commercial purposes only.
Commercial use of any kind is prohibited without explicit written permission from the author.

See the [LICENSE](LICENSE) file for the full license text, or visit
[https://polyformproject.org/licenses/noncommercial/1.0.0/](https://polyformproject.org/licenses/noncommercial/1.0.0/).

For commercial licensing inquiries, contact [sricharanc03@gmail.com](mailto:sricharanc03@gmail.com).

