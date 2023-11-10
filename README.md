# Root Hjemmeside

Laget av PIN

## Stack

-   [Next.js](https://nextjs.org/)
-   [NextUI](https://nextui.org/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [pnpm](https://pnpm.js.org/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Heroicons](https://heroicons.com/)
-   [Sanity](https://www.sanity.io/)
-   [Prettier](https://prettier.io/)

## Setup

### Installere avhengigheter

Minimum **Node.js** versjon er `16.14.0`

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

## Praktisk info

Se
også [Krav til nettsiden](https://github.com/Project-insert-name/root-website-frontend/blob/main/Krav%20til%20nettsiden.md)
og [info om de ulike sidene](https://github.com/Project-insert-name/root-website-frontend/blob/main/Sider.md).

### App router

Applikasjonen bruker Next.js 13 sin nye [App router](https://nextjs.org/docs/app/building-your-application).
Det vil si at alle filer knyttet til de ulike sidene skal ligge under app mappen, på følgende
format. `app/navn-paa-path/page.tsx`

-   For at filen skal bli til en rute <ins>må</ins> den hete `page.tsx`, dersom den heter noe annet kan den ikke nås via
    url.

Filer som heter `layout.tsx` blir automatisk wrappet rundt alle andre routes i samme mappe og nedover i mappestrukturen.

### Mappestruktur

| Mappe      | Beskrivelse                                                        |
| ---------- | ------------------------------------------------------------------ |
| app        | Filer knyttet til routes/pages                                     |
| components | React komponenter som brukes av pages eller andre komponenter      |
| hooks      | Custom hooks som kan brukes i client components på nettsiden       |
| public     | Bilder, fonter og andre ikke-kode filer som skal vises i nettsiden |
| sanity     | Filer knyttet til Sanity, som queries, typer og andre ting         |
| utils      | Nyttige hjelpefunksjoner                                           |

### Server components

**Next.js 13** støtter
også [react server components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
for å kjøre kode på en server før resultatet blir sendt til klienten.
Det er noen begrensninger på server components, blant annet av [react hooks](https://react.dev/reference/react) ikke er
støttet, da må man bruke client components.

Alle komponenter i next.js 13 er server components som standard, man kan gjøre de om til client components ved å
skrive "use client" i toppen av filen.

### PNPM

Hvis du skal installere en ny pakke, bruk kommandoen `pnpm -w add din-pakke`.

De fleste kommandoer fra **NPM** virker også med **PNPM**
