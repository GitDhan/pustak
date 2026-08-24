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
                  {
        title: "The Lean Startup",
        author: "Eric Ries",
        description: "How today's entrepreneurs use continuous innovation to create radically successful businesses.",
        coverImageUrl: "https://covers.openlibrary.org/b/isbn/0307887898-L.jpg",
        genre: "Business",
        amazonUrl: "https://www.amazon.com/dp/0307887898",
        availability: "IN_STOCK",
      },
      {
        title: "Deep Work",
        author: "Cal Newport",
        description: "Rules for focused success in a distracted world, and why the ability to concentrate is becoming rare and valuable.",
        coverImageUrl: "https://covers.openlibrary.org/b/isbn/1455586692-L.jpg",
        genre: "Self-help",
        amazonUrl: "https://www.amazon.com/dp/1455586692",
        availability: "IN_STOCK",
      },
      {
        title: "The Pragmatic Programmer",
        author: "David Thomas & Andrew Hunt",
        description: "Classic guide to software craftsmanship, covering practical tips for becoming a better, more effective developer.",
        coverImageUrl: "https://covers.openlibrary.org/b/isbn/020161622X-L.jpg",
        genre: "Technology",
        amazonUrl: "https://www.amazon.com/dp/020161622X",
        availability: "IN_STOCK",
      },
      {
        title: "Educated",
        author: "Tara Westover",
        description: "A memoir about a woman who grows up in a survivalist family and eventually earns a PhD from Cambridge University.",
        coverImageUrl: "https://covers.openlibrary.org/b/isbn/0399590501-L.jpg",
        genre: "Memoir",
        amazonUrl: "https://www.amazon.com/dp/0399590501",
        availability: "SOLD_OUT",
      },
      {
        title: "The Psychology of Money",
        author: "Morgan Housel",
        description: "Timeless lessons on wealth, greed, and happiness, exploring the strange ways people think about money.",
        coverImageUrl: "https://covers.openlibrary.org/b/isbn/0857197681-L.jpg",
        genre: "Business",
        amazonUrl: "https://www.amazon.com/dp/0857197681",
        availability: "IN_STOCK",
      },
      {
        title: "Project Hail Mary",
        author: "Andy Weir",
        description: "A lone astronaut must save humanity from extinction in this science fiction novel of survival and discovery.",
        coverImageUrl: "https://covers.openlibrary.org/b/isbn/0593135202-L.jpg",
        genre: "Science Fiction",
        amazonUrl: "https://www.amazon.com/dp/0593135202",
        availability: "PRE_ORDER",
      },
      {
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        description: "A groundbreaking exploration of the two systems that drive the way we think and make decisions.",
        coverImageUrl: "https://covers.openlibrary.org/b/isbn/0374533555-L.jpg",
        genre: "Psychology",
        amazonUrl: "https://www.amazon.com/dp/0374533555",
        availability: "IN_STOCK",
      },
      {
        title: "The Midnight Library",
        author: "Matt Haig",
        description: "A novel about a library between life and death, where every book lets you try a different version of your life.",
        coverImageUrl: "https://covers.openlibrary.org/b/isbn/0525559477-L.jpg",
        genre: "Fiction",
        amazonUrl: "https://www.amazon.com/dp/0525559477",
        availability: "IN_STOCK",
      },
      {
        title: "Clean Code",
        author: "Robert C. Martin",
        description: "A handbook of agile software craftsmanship, teaching principles for writing readable, maintainable code.",
        coverImageUrl: "https://covers.openlibrary.org/b/isbn/0132350882-L.jpg",
        genre: "Technology",
        amazonUrl: "https://www.amazon.com/dp/0132350882",
        availability: "SOLD_OUT",
      },
      {
        title: "Man's Search for Meaning",
        author: "Viktor Frankl",
        description: "A psychiatrist's memoir of surviving the Holocaust and the philosophy of finding purpose in suffering.",
        coverImageUrl: "https://covers.openlibrary.org/b/isbn/080701429X-L.jpg",
        genre: "Memoir",
        amazonUrl: "https://www.amazon.com/dp/080701429X",
        availability: "IN_STOCK",
      },
      {
        title: "Dune",
        author: "Frank Herbert",
        description: "A epic science fiction saga of politics, religion, and ecology on the desert planet Arrakis.",
        coverImageUrl: "https://covers.openlibrary.org/b/isbn/0441172717-L.jpg",
        genre: "Science Fiction",
        amazonUrl: "https://www.amazon.com/dp/0441172717",
        availability: "IN_STOCK",
      },
      {
        title: "Building a Second Brain",
        author: "Tiago Forte",
        description: "A proven method for turning information overload into personal growth using digital note-taking systems.",
        coverImageUrl: "https://covers.openlibrary.org/b/isbn/1982167384-L.jpg",
        genre: "Self-help",
        amazonUrl: "https://www.amazon.com/dp/1982167384",
        availability: "PRE_ORDER",
      },
        ],
    }); 
}

main()
  .then(() => console.log("Seeded!"))
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());