# Feature: Book Detail Modal

Clicking a book on the homepage currently does nothing. Add a modal.

## Behavior
- Click book cover/title → modal opens
- Click outside, X button, or Escape → modal closes

## Modal shows
- Cover image, title, author, full description, genre
- Availability badge: IN_STOCK (green "In Stock"), PRE_ORDER (yellow "Pre-Order"), SOLD_OUT (red "Sold Out")
- "View on Amazon" link (only if amazonUrl exists)

## Constraints
- Homepage stays a Server Component (queries Prisma directly, don't revert to API fetch)
- Modal needs state → separate Client Component ("use client")
- Match existing dark theme (Tailwind, bg-neutral-950 etc.)
- Proper Book type, no `any`

## Skip for now
- /books/[id] page
- Any admin/edit stuff