# Root Hjemmeside

Laget av P\<IN>

## Stack

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [pnpm](https://pnpm.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Heroicons](https://heroicons.com/)
- [Sanity](https://www.sanity.io/)

## Setup

### Installere avhengigheter

```bash
pnpm install
```

## Praktisk info

Se også [Krav til nettsiden](https://github.com/Project-insert-name/root-website-frontend/blob/main/Krav%20til%20nettsiden.md) og [info om de ulike sidene](https://github.com/Project-insert-name/root-website-frontend/blob/main/Sider.md).

### App router

Applikasjonen bruker Next.js 13 sin nye [App router](https://nextjs.org/docs/app/building-your-application).
Det vil si at alle filer knyttet til de ulike sidene skal ligge under app mappen, på følgende format. `app/navn-paa-path/page.tsx`
- For at filen skal bli til en rute må den hete page.tsx, dersom den heter noe annet kan den ikke nås via url.

Filer som heter layout.tsx blir automatisk wrappet rundt alle andre routes i samme mappe og nedover i mappestrukturen.

### Mappestruktur

| Mappe | Beskrivelse |
| ----- | ------------|
| app | Filer knyttet til routes/pages |
| components | Komponenter som brukes av pages eller andre komponenter |
| public | Bilder, fonter og andre ikke-kode filer som skal vises i nettsiden |
| sanity | Filer knyttet til Sanity, som queries, typer og andre ting |
| utils | Filer som inneholder funksjoner som kan brukes andre stedet i nettsiden |

### Server components

Next.js 13 støtter også [react server components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
for å kjøre kode på en server før resultatet blir sendt til klienten.
Det er noen begrensninger på server components, blant annet av [react hooks](https://react.dev/reference/react) ikke er støttet, da må man bruke client components.

Alle komponenter i next.js 13 er server components som standard, man kan gjøre de om til client components ved å skrive "use client" i toppen av filen.

### PNPM

Hvis du skal installere en ny pakke, bruk kommandoen `pnpm -w install din-pakke`.

