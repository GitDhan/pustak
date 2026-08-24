"use client";

import { useEffect, useState } from "react";

export type Availability = "IN_STOCK" | "PRE_ORDER" | "SOLD_OUT";

export type Book = {
  id: string;
  title: string;
  author: string;
  description: string;
  coverImageUrl: string;
  genre: string;
  amazonUrl: string | null;
  availability: Availability;
  createdAt: Date;
};

const AVAILABILITY_BADGE: Record<Availability, { label: string; className: string }> = {
  IN_STOCK: { label: "In Stock", className: "bg-green-500/20 text-green-400" },
  PRE_ORDER: { label: "Pre-Order", className: "bg-yellow-500/20 text-yellow-400" },
  SOLD_OUT: { label: "Sold Out", className: "bg-red-500/20 text-red-400" },
};

export default function BookGrid({ books }: { books: Book[] }) {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  useEffect(() => {
    if (!selectedBook) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedBook(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedBook]);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {books.map((book) => (
          <div
            key={book.id}
            className="cursor-pointer group"
            onClick={() => setSelectedBook(book)}
          >
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

      {selectedBook && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          onClick={() => setSelectedBook(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-lg bg-neutral-950 border border-neutral-800 p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={() => setSelectedBook(null)}
              aria-label="Close"
              className="absolute top-4 right-4 text-neutral-400 hover:text-white text-xl leading-none"
            >
              ×
            </button>

            <div className="flex flex-col sm:flex-row gap-6">
              <img
                src={selectedBook.coverImageUrl}
                alt={selectedBook.title}
                className="w-full sm:w-56 rounded-lg shadow-lg object-cover"
              />

              <div className="flex-1">
                <h2 className="text-2xl font-bold">{selectedBook.title}</h2>
                <p className="text-neutral-400 mt-1">{selectedBook.author}</p>

                <span
                  className={`inline-block mt-3 px-3 py-1 rounded-full text-xs font-semibold ${
                    AVAILABILITY_BADGE[selectedBook.availability].className
                  }`}
                >
                  {AVAILABILITY_BADGE[selectedBook.availability].label}
                </span>

                <p className="mt-3 text-sm text-neutral-400">
                  Genre: <span className="text-neutral-200">{selectedBook.genre}</span>
                </p>

                <p className="mt-4 text-neutral-300 whitespace-pre-line">
                  {selectedBook.description}
                </p>

                {selectedBook.amazonUrl && (
                  <a
                    href={selectedBook.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 px-4 py-2 rounded-md bg-yellow-500 text-neutral-950 font-semibold hover:bg-yellow-400 transition-colors"
                  >
                    View on Amazon
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
