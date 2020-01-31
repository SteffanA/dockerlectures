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
# Copy over something from the builder phase (from-> to)
# The nginx image suggests where to place. It also will auto-start
COPY --from=builder /app/build /usr/share/nginx/html