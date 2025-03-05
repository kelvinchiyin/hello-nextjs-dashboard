## Next.js App Router Course - Starter (Completed by me)

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

## Project Overview

This project is a financial dashboard application built with Next.js 14, featuring:

- **Authentication & Authorization**: Secure user authentication system using NextAuth.js with credentials provider
- **Database Integration**: PostgreSQL database integration for storing user, customer and invoice data
- **Modern UI**: Responsive dashboard interface with mobile-first design
- **Search & Pagination**: Client-side search and pagination for invoices and customers
- **Real-time Updates**: Dynamic data fetching and updates using React Suspense
- **Type Safety**: Full TypeScript implementation for enhanced code reliability

### Key Features

- Dashboard overview with key metrics and latest transactions
- Invoice management (create, update, delete)
- Customer management and tracking
- Search functionality across invoices and customers
- Responsive tables with mobile-optimized views
- Secure login and session management

### Tech Stack

- Next.js 14 with App Router
- TypeScript
- PostgreSQL
- NextAuth.js
- Tailwind CSS
- Bcrypt for password hashing
- Zod for validation

### Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Set up environment variables
4. Run development server with `npm run dev`

### Implementation Details

#### Authentication Flow
- Uses NextAuth.js for authentication with a credentials provider
- Password hashing with bcrypt for secure storage
- Session management and protected routes via middleware
- Custom auth configuration in `auth.config.ts` and `auth.ts`

#### Database Structure
- PostgreSQL database with tables for:
  - Users (id, name, email, password)
  - Customers (id, name, email, image_url)
  - Invoices (id, customer_id, amount, status, date)
- SQL queries optimized for performance with JOINs and indexes

#### Data Fetching
- Server components fetch data directly from database
- Parallel data fetching with Promise.all for dashboard metrics
- Error handling and type safety with TypeScript
- Pagination implemented with OFFSET/LIMIT

#### UI Components
- Responsive tables that adapt to mobile views
- Loading states with React Suspense and skeletons
- Client-side search with debounced input
- Form validation using Zod schemas



Password generator for user accounts:
node -e "const bcrypt = require('bcrypt'); bcrypt.hash('P@ssw0rd', 10).then(hash => console.log(hash));"




