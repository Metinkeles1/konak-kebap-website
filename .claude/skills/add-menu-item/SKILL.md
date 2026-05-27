---
name: add-menu-item
description: Use this skill to add a new menu item to the Konak Kebap menu (src/lib/menu.ts). Trigger when the user says "yeni menü öğesi ekle", "menüye X ekle", "/add-menu-item", or otherwise asks to add a dish, drink, or dessert to the menu. Do NOT trigger for editing existing items or for unrelated content (blog posts, components).
---

# Add Menu Item

Adds a new item to `src/lib/menu.ts` under the correct category, with all required and optional fields.

## Data shape

From `src/types/menu.ts`:

```ts
interface MenuItem {
  slug: string;          // required, kebab-case, ASCII (no Turkish chars)
  name: string;          // required, Turkish display name
  price: number;         // required, in TRY (integer)
  desc: string;          // required, 1-sentence Turkish description
  longDesc?: string;     // optional, 2-3 sentences for detail page
  ingredients?: string[]; // optional, used on detail page
  badge?: string;        // optional, e.g. "Şef Önerisi", "Yeni"
  image?: string;        // optional, full image URL
  popular?: boolean;     // optional
  spicy?: boolean;       // optional
  prepTime?: string;     // optional, e.g. "15-20 dk"
}
```

Categories (exact strings):
`Çorbalar` | `Kebaplar` | `Dürümler` | `Lahmacun` | `Pideler` | `Kilo İşi` | `Tatlılar` | `İçecekler`

## Process

1. **Collect inputs** — ask the user (via AskUserQuestion or natural dialogue) for:
   - Category (one of the 8 above)
   - Name (Turkish)
   - Price (TRY, integer)
   - Short description (1 sentence)
   - Optional: longDesc, ingredients, badge, image URL, popular/spicy/prepTime
2. **Derive slug** — from `name`: lowercase, replace Turkish chars (ç→c, ğ→g, ı→i, ö→o, ş→s, ü→u), spaces → hyphens, strip non-alphanumeric.
3. **Check for duplicates** — Grep `src/lib/menu.ts` for the slug; if it exists, ask the user how to proceed.
4. **Insert** — Edit `src/lib/menu.ts`, adding the new object to the end of the chosen category's array (before the closing `]`). Match the existing one-liner style for simple items, or multi-line block style if `longDesc`/`ingredients` are provided.
5. **Verify** — `pnpm build 2>&1 | tail -5` to confirm the new page (`/menu/<slug>`) builds.
6. **Report** — one line: `✓ Eklendi: <name> (/menu/<slug>) — kategori: <category>`.

## Style conventions

- Simple item (no extra fields): single-line object.
- Item with `longDesc` or `ingredients`: multi-line, properties one-per-line.
- Always include `slug`, `name`, `price`, `desc` in that order; optional fields after.
- Turkish text uses smart apostrophes (`'`) only inside JS strings, escape with backslash if needed.

## Skip rules

- Don't auto-fetch images — only set `image` if the user provides a URL.
- Don't invent prices or descriptions — ask if missing.
- Don't create a category — if user names an unknown category, ask which existing one to use.
