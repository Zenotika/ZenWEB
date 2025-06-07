# Zenotika E-Commerce Platform

## Project Structure

- `/app/storefront` — Public-facing site (Next.js App Router)
- `/app/admin` — Admin panel (protected)
- `/modules` — Modular business logic (commerce, cart, checkout, user, orders, infrastructure, components)
- `/lib` — Shared utilities (Supabase, Midtrans, etc.)
- `/public` — Static assets
- `/styles` — Tailwind and global CSS
- `/tests` — Unit/integration tests

## Setup
1. Copy `.env.local` and fill in all required secrets (Supabase, Strapi, Midtrans, SendGrid, Redis).
2. Install dependencies:
   ```powershell
   npm install
   ```
3. Run the dev server:
   ```powershell
   npm run dev
   ```

## Next Steps
- Configure Tailwind, Framer Motion, and Phosphor React.
- Connect Supabase and Strapi endpoints.
- Implement product grid, cart, checkout, and user flows.
- Set up CI/CD with Vercel and GitHub Actions.

---

> Each module and API route contains comments for further development and configuration guidance.
