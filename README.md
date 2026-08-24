# Pustak 📚

A full-stack book catalog app — browse books, click to view details, availability, and purchase links.

Built to practice real-world full-stack patterns: a typed API, a relational schema, and a server-rendered frontend, without unnecessary complexity.

![alt text](<Screenshot 2026-08-24 at 3.02.23 p.m..png>)


Production app url: https://pustak-ku3s.vercel.app/


## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** for styling
- **Prisma** ORM
- **PostgreSQL** (hosted on Neon)

## Features

- Book grid fetched server-side from a PostgreSQL database
- Book detail modal + shareable `/books/[id]` page
- Availability status (in stock / pre-order / sold out) modeled as a database enum
- Seed script for sample data

## Running locally

\`\`\`bash
git clone https://github.com/YOUR_USERNAME/pustak.git
cd pustak
npm install
# add your DATABASE_URL to a .env file
npx prisma db push
npx prisma db seed
npm run dev
\`\`\`

## Why I built this

I wanted a small, real project to practice the exact stack most full-stack roles ask for — not a tutorial clone, but something with a real schema, a real API, and real deploy considerations.
