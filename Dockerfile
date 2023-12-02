# Build based on the minimal alpine linux node image
FROM node:20

RUN npm install -g pnpm

# Change workdir to Root directory
WORKDIR /srv/Root/root-website

COPY .npmrc package.json pnpm-lock.yaml .

RUN pnpm install --frozen-lockfile

COPY . .

EXPOSE 3000

# Run the app
ENTRYPOINT ["sh", "-c", "pnpm dev"]
