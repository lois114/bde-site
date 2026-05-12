# BDE Ynov Toulouse — Site officiel

Site vitrine du Bureau des Étudiants Ynov Toulouse : événements à venir, archives, galerie photo et partenaires.

- **Production** : https://ynov-toulouse-bde.vercel.app
- **Hébergement** : Vercel
- **Repo** : github.com/lois114/bde-site (branche principale `main`)

---

## Stack technique

| Couche | Technologie | Version |
|---|---|---|
| Framework | Next.js (App Router) | 16.1.6 |
| UI | React / React DOM | 19.2.3 |
| Langage | TypeScript | ^5 |
| Styles | Tailwind CSS (v4 via `@tailwindcss/postcss`) | ^4 |
| Icônes | `lucide-react` | ^0.575.0 |
| CMS headless | Sanity (Studio embarqué sur `/studio`) | ^4.22.0 |
| Intégration CMS | `next-sanity`, `@sanity/image-url`, `@portabletext/react` | — |
| Lint | ESLint + `eslint-config-next` | ^9 |

---

## Architecture

```
app/
 ├─ layout.tsx           # Shell global, metadata SEO, footer
 ├─ page.tsx             # Accueil (hero + cartes + partenaires)
 ├─ sitemap.ts           # Sitemap dynamique (events depuis Sanity)
 ├─ evenements/          # Liste des events à venir + page détail [slug]
 ├─ archives/            # Événements passés
 ├─ galerie/             # Albums photo agrégés
 ├─ studio/[[...tool]]/  # Sanity Studio embarqué
 └─ components/          # Navbar, EventCard, EventsFilter,
                          LightboxGallery, AddToCalendarButton,
                          ThemeSwitch, skeletons…
lib/                     # Client Sanity, requêtes GROQ, config liens sociaux
sanity/                  # Schemas, env, structure, client
types/index.ts           # Types TS (EventSummary, EventDetail, GalleryEvent…)
public/                  # Logos partenaires + icônes réseaux
```

---

## Modèle de données (Sanity)

Document **`event`** (`sanity/schemaTypes/event.ts`) :

- `title` (string, requis), `slug` (auto, requis)
- `startDate` / `endDate` (datetime)
- `location` (string)
- `type` : `soiree` | `sport` | `integration` | `culture` | `autre`
- `tags` (string[]), `poster` (image hotspot)
- `description` (Portable Text), `photoAlbum` (image[]), `videos` (url[])
- `signupUrl` (HelloAsso / Form / Shotgun), `driveFolderUrl` (téléchargement photos)
- `published` (bool), `featured` (bool)

Requêtes GROQ (`lib/queries.ts`) : `upcomingEventsQuery`, `pastEventsQuery`, `galleryQuery`, `eventBySlugQuery`.

---

## Pages publiques

| Route | Rôle | Rendu |
|---|---|---|
| `/` | Accueil — hero + 3 cartes + partenaires | Statique |
| `/evenements` | Événements à venir, filtrables | ISR `revalidate = 60s` |
| `/evenements/[slug]` | Détail d'un événement (affiche, infos, inscription, album) | Dynamique |
| `/archives` | Événements passés | ISR |
| `/galerie` | Albums photo + lightbox | ISR |
| `/studio` | Sanity Studio (édition de contenu) | Client |
| `/sitemap.xml` | Sitemap dynamique | Build |

---

## Fonctionnalités clés

- Navbar sticky responsive (burger mobile) avec liens Instagram / Twitch / Discord / TikTok
- Thème clair / sombre (`ThemeSwitch`) + glows décoratifs en background
- Cartes événement avec poster Sanity (CDN `cdn.sanity.io` autorisé dans `next.config.ts`)
- Filtre des événements par type / tag (`EventsFilter`)
- Lightbox galerie (`LightboxGallery`) + bouton "Ajouter au calendrier" (`.ics`)
- SEO complet : `metadataBase`, OpenGraph, Twitter Card, sitemap dynamique
- Liens d'inscription externes par événement (HelloAsso, Google Form, Shotgun…)
- Lien Google Drive pour téléchargement groupé des photos

---

## Configuration & environnement

Variables requises (cf. `sanity/env.ts`) — à placer dans `.env.local` :

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=...
NEXT_PUBLIC_SANITY_DATASET=...
NEXT_PUBLIC_SANITY_API_VERSION=2026-02-20
```

- Images distantes autorisées : `cdn.sanity.io`, `logo.clearbit.com`
- Client Sanity en mode CDN (`useCdn: true`)

---

## Scripts npm

```bash
npm run dev      # Lance le serveur de dev (http://localhost:3000)
npm run build    # Build de production
npm run start    # Démarre la version build en local
npm run lint     # ESLint
```

---

## Partenaires (homepage)

McDonald's · Jow · Revolut · Rose Festival · GaroRock . Matoto & Co
(logos servis depuis `/public`)

---

## Déploiement

Déploiement automatique sur **Vercel** à chaque push sur `main`.
Pour déployer manuellement : installer la CLI Vercel (`npm i -g vercel`), puis `vercel deploy`.

---

## Pistes d'amélioration

- Migrer `next.config.ts` / config Vercel vers `vercel.ts` (config typée)
- Passer `useCdn: false` côté Sanity pour profiter pleinement de l'ISR + revalidation par tag
- Ajouter une CI (lint + build) et des tests automatisés
