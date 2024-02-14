# Root Linjeforening Hjemmeside

Laget av kodegruppen **PIN**
![](public/root-logo.svg)

---

> [!NOTE]
> For bugs eller forslag til forbedringer, opprett en issue i [issues](https://github.com/Project-insert-name/root-website/issues).

## 📑 Innhold

-   [Stack](#-stack)
-   [Setup](#-setup)

    -   [Installere avhengigheter](#installere-avhengigheter)
    -   [Prettier](#prettier)
        -   [VSCode](#vscode)
        -   [Intellij / Webstorm / Annen JetBrains IDE](#intellij--webstorm--annen-jetbrains-ide)
    -   [Starte utviklingsserver](#starte-utviklingsserver)
    -   [Starte produksjonsserver](#starte-produksjonsserver)

-   [Praktisk info](#-praktisk-info)
    -   [Mappestruktur](#mappestruktur)
    -   [PNPM](#pnpm)

## 🤖 Stack

-   [Next.js](https://nextjs.org/)
-   [NextUI](https://nextui.org/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [pnpm](https://pnpm.js.org/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Heroicons](https://heroicons.com/)
-   [Sanity](https://www.sanity.io/)
-   [Prettier](https://prettier.io/)

## 💻 Setup

### Installere avhengigheter

Minimum **Node.js** versjon er `18.17.0`

```bash
pnpm install
```

### Prettier

Prosjektet er satt opp med **Prettier** for å formatere koden.
For at formateringen skal fungere må du sette opp Prettier i din editor.

#### VSCode

For å installere Prettier i VSCode, gå til extensions og søk etter Prettier. Installer så extensionen som heter
"Prettier - Code formatter".
Deretter legg til følgende i din settings.json:

```json
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": true
```

Slik at prettier formatterer koden din automatisk når du lagrer.

#### Intellij / Webstorm / Annen JetBrains IDE

Gå til "Language & Frameworks -> JavaScript -> Prettier", sett configuration til automatic og kryss av for "Run on
save".

Pattern bør matche det som er satt i `package.json` i `format` scriptet.

`{**/*,*}.{js,jsx,ts,tsx,json,yml,css,md}`

### Starte utviklingsserver

Kjører i development mode på [http://localhost:3000](http://localhost:3000).

Bruker dev datasettet fra Sanity.

```bash
pnpm dev
```

### Starte produksjonsserver

Kjører i production mode på [http://localhost:3000](http://localhost:3000).

Bruker production datasettet fra Sanity.

```bash
pnpm build && pnpm start
```

## 👉 Praktisk info

Se
også [Krav til nettsiden](https://github.com/Project-insert-name/root-website-frontend/blob/main/Krav%20til%20nettsiden.md).

> [!NOTE]
> For mer info om Next.js og Sanity, se [wiki](https://github.com/Project-insert-name/root-website/wiki) eller dokumentasjonen til de respektive rammeverkene.

### Mappestruktur

-   [.github](/.github) (GitHub actions, dependabot og templates)
-   [app](/app) (Filer knyttet til routes/pages)
    -   [(root)](</app/(root)>) (Hovedmappen for alle ruter som ikke tilhører sanity)
    -   [(sanity)](</app/(sanity)>) (Hovedmappen for alle ruter som tilhører sanity)
-   [components](/components) (React komponenter som brukes av pages eller andre komponenter)
    -   [buttons](/components/buttons) (Diverse knapper)
    -   [cards](/components/cards) (Kort som brukes for å vise innhold, som arrangementer, nyheter og lignende)
    -   [header](/components/header) (Mavigasjonsbaren med lenkene)
    -   [icons](/components/icons) (Komponenter som bygger rundt heroicons og SVG ikoner)
    -   [imageGallery](/components/imageGallery) (Komponenter for bildegalleriet)
    -   [omOss](/components/omOss) (Komponenter for om oss siden)
-   [hooks](/hooks) (Custom hooks som kan brukes i client components på nettsiden)
-   [public](/public) (Bilder, fonter og andre ikke-kode filer som skal vises i nettsiden)
-   [sanity](/sanity) (Filer knyttet til Sanity. Som schemas, queries, typer og andre ting)
    -   [lib](/sanity/lib) (Sanity relaterte funksjoner)
    -   [queries](/sanity/queries) (Spørringer mot sanity)
    -   [schemas](/sanity/schemas) (Sanity schemas)
-   [utils](/utils) (Nyttige hjelpefunksjoner)

Merk at `app` mappen er delt inn i to ulike grupper, `(root)` og `(sanity)`. Hvor filene kun eksisterer i den gruppen de er definert i.
Hvis de er definert utenfor en gruppe, vil de eksistere i alle grupper.
(sanity) mappen brukes bare for studio, siden studioet bruker en egen stil og trenger ikke samme layout som resten av nettsiden.

### PNPM

Hvis du skal installere en ny pakke, bruk kommandoen `pnpm -w add din-pakke`.

De fleste kommandoer fra **NPM** virker også med **PNPM**
