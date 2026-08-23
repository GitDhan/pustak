import { PrismaClient } from "./generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

export default async function Home() {
  const books = await prisma.book.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="min-h-screen bg-neutral-950 text-white px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Pustak</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {books.map((book) => (
          <div key={book.id} className="cursor-pointer group">
            <img
              src={book.coverImageUrl}
              alt={book.title}
              className="rounded-lg shadow-lg group-hover:scale-105 transition-transform"
            />
            <p className="mt-2 font-semibold">{book.title}</p>
            <p className="text-sm text-neutral-400">{book.author}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
