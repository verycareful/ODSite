# OD Site

A Next.js web application for managing OD (On-Duty) details, built with Supabase as the backend.

> ⚠️ **Note:** This project is currently inactive. It was not pursued further due to a lack of proper institutional support, and the repository is now being made public.

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
├── pages/
│   ├── _app.js          # Next.js app wrapper
│   ├── index.js         # Home page
│   ├── login.js         # Login page
│   ├── dashboard.js     # Dashboard page
│   └── add-oddetail.js  # Add OD detail page
├── styles/
│   └── globals.css      # Global styles
├── utils/
│   └── supabaseClient.js # Supabase client configuration
└── package.json
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

This project is available under the [Creative Commons Attribution-NonCommercial 4.0 International Public License](LICENSE).
