---
name: tailwind-v4-canonical
description: Use this skill to convert Tailwind v3 legacy class syntax to v4 canonical syntax across one or more files. Trigger when the user says "v4 canonical", "fix tailwind classes", "tailwind v4'e çevir", or after writing new components where IDE diagnostics report legacy class usage. Do NOT trigger for unrelated styling work.
---

# Tailwind v4 canonical fixer

This project uses Tailwind v4. The following v3 → v4 rewrites are mandatory in any touched file:

| v3 (legacy)                          | v4 (canonical)                |
|--------------------------------------|-------------------------------|
| `flex-shrink-0`                      | `shrink-0`                    |
| `flex-shrink`                        | `shrink`                      |
| `flex-grow-0`                        | `grow-0`                      |
| `flex-grow`                          | `grow`                        |
| `bg-gradient-to-`                    | `bg-linear-to-`               |
| `aspect-[16/9]` (any `aspect-[N/M]`) | `aspect-16/9` (any `aspect-N/M`) |
| `bg-[length:X]`                      | `bg-size-[X]`                 |
| `decoration-clone`                   | `box-decoration-clone`        |
| `decoration-slice`                   | `box-decoration-slice`        |
| `overflow-ellipsis`                  | `text-ellipsis`               |

## How to run

1. Ask the user which scope: a specific file, a directory (e.g. `src/components`), or all `src/`.
2. Use a single Bash/PowerShell pass with `sed` (or PowerShell equivalent) to apply all replacements at once — never one Edit per occurrence.
3. After replacement, run `pnpm build 2>&1 | tail -5` to confirm no regressions.
4. Report a one-line summary: "✓ N files, M classes updated."

## Recommended single-pass command (PowerShell)

```powershell
$files = Get-ChildItem -Path <scope> -Recurse -Include *.tsx,*.ts,*.mdx
foreach ($f in $files) {
  $c = Get-Content $f.FullName -Raw
  $orig = $c
  $c = $c -replace '\bflex-shrink-0\b','shrink-0'
  $c = $c -replace '\bflex-shrink\b','shrink'
  $c = $c -replace '\bflex-grow-0\b','grow-0'
  $c = $c -replace '\bflex-grow\b','grow'
  $c = $c -replace '\bbg-gradient-to-','bg-linear-to-'
  $c = $c -replace 'aspect-\[(\d+)/(\d+)\]','aspect-$1/$2'
  $c = $c -replace 'bg-\[length:([^\]]+)\]','bg-size-[$1]'
  $c = $c -replace '\bdecoration-clone\b','box-decoration-clone'
  $c = $c -replace '\bdecoration-slice\b','box-decoration-slice'
  $c = $c -replace '\boverflow-ellipsis\b','text-ellipsis'
  if ($c -ne $orig) { Set-Content -Path $f.FullName -Value $c -NoNewline }
}
```

## Skip rules

- Do NOT rewrite classes inside string literals that document v3 (e.g. blog post code blocks).
- Do NOT touch `node_modules`, `.next`, or `dist`.
- If the user's scope is ambiguous, ask before running.
