# Portfolio – CLAUDE.md

## Stack

- **Astro 6** — static-first, zero JS by default
- **Tailwind v4** — CSS-first config via `@theme` in `global.css`, no `tailwind.config.js`
- **TypeScript** — strict, always
- **Content Collections** — articles en Markdown dans `src/content/`

## Règles absolues

### JS
**Zéro JS sauf accord explicite.** Avant d'ajouter `<script>`, un framework UI (React/Vue/Svelte), ou `client:*` sur un composant — demande. Cherche toujours l'alternative CSS ou Astro pure en premier.

### Astro
- Toute page = `src/pages/*.astro`
- Layouts dans `src/layouts/` — pas de HTML boilerplate répété dans les pages
- Composants dans `src/components/` — un composant = un fichier = une responsabilité
- Props typées via interface TypeScript dans le frontmatter
- `Astro.props` destructuré en haut du frontmatter
- Jamais de logique métier dans les templates — calculs dans le frontmatter

### Tailwind v4
- Config via `@theme {}` dans `src/styles/global.css` — pas de fichier `tailwind.config.js`
- Variables CSS custom dans `@theme` pour couleurs, fonts, spacing du design system
- Classes utilitaires directement sur les éléments — pas de `@apply` sauf pour des patterns très répétitifs
- Variants Tailwind v4 : `hover:`, `focus-visible:`, `dark:`, etc.
- Évite les classes dynamiques non-détectables (pas de template literals `bg-${color}`)

### Markdown / Content Collections
- Articles dans `src/content/articles/` (ou `blog/`)
- Schema Zod défini dans `src/content/config.ts`
- Frontmatter minimal mais typé : `title`, `date`, `description`, `tags[]`, `draft?`
- Pas de HTML dans les fichiers Markdown sauf absolue nécessité

## Structure

```
src/
  components/       # Composants réutilisables (.astro)
  content/
    articles/       # Posts Markdown
    config.ts       # Zod schemas des collections
  layouts/
    Base.astro      # Shell HTML (head, meta, fonts)
    Article.astro   # Layout article avec prose
  pages/
    index.astro
    articles/
      index.astro   # Liste des articles
      [slug].astro  # Page article dynamique
  styles/
    global.css      # @import "tailwindcss" + @theme + base styles
public/             # Assets statiques (images, fonts)
```

## Conventions

- **Fichiers** : PascalCase pour composants/layouts, kebab-case pour pages/styles
- **Props** : toujours une `interface Props` typée, pas de `any`
- **Commentaires** : seulement si le WHY n'est pas évident — jamais de "ce composant affiche X"
- **Imports** : alias `@/` pointant vers `src/` (config dans `tsconfig.json`)

## Commandes

```bash
npm run dev      # Dev server
npm run build    # Build prod
npm run preview  # Preview build
```

## Design system (à définir dans global.css)

```css
@import "tailwindcss";

@theme {
  /* Définir ici : couleurs, fonts, spacing custom */
  --color-*: ...;
  --font-*: ...;
}
```

## Non-goals

- Pas de SSR (tout statique sauf besoin explicite)
- Pas de state management
- Pas d'animations JS — CSS uniquement
- Pas de composants UI tiers tant que Astro + CSS suffit
