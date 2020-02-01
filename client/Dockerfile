# build phase
FROM node:alpine as builder

WORKDIR '/app'
COPY package.json .
RUN npm install
# Do striaght copy; no volume stuff b/c code is build aka static
COPY . .
RUN npm run build

# /app/build will be built at this point

# Run phase
FROM nginx
# Needs port map to port 80. AWS reads this and exposes. Local dev does nothing, just a note
EXPOSE 80
# Copy over something from the builder phase (from-> to)
# The nginx image suggests where to place. It also will auto-start
COPY --from=builder /app/build /usr/share/nginx/html