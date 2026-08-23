import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../app/generated/prisma/client";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main () {
    await prisma.book.createMany({
        data: [
            {
                title: "Atomic Habits",
                author: "James Clear",
                description: "A practical guide to building good habits and breaking bad ones through small, consistent changes.",
                coverImageUrl: "https://covers.openlibrary.org/b/isbn/0735211299-L.jpg",
                genre: "Self-help",
                amazonUrl: "https://www.amazon.com/dp/0735211299",
                availability: "IN_STOCK",
            },
            {   
                title: "Sapiens",
                author: "Yuval Noah Harrari",
                description: "A sweeping look at how Homo sapiens came to dominate the world through cognitive, agricultural, and scientific revolutions.",
                coverImageUrl: "https://covers.openlibrary.org/b/isbn/0062316095-L.jpg",
                genre: "History",
                amazonUrl: "https://www.amazon.com/dp/0062316095",
                availability: "IN_STOCK",
            },
            {
                title:"Zero to One",
                author: "Peter Thiel",
                description: "Notes on startups and building the future by creating new things rather than copying what already works.",
                coverImageUrl: "https://covers.openlibrary.org/b/isbn/0804139296-L.jpg",
                genre: "Business",
                amazonUrl: "https://www.amazon.com/dp/0804139296",
                availability: "PRE_ORDER",
            },
        ],
    }); 
}

main()
  .then(() => console.log("Seeded!"))
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());