# Specify base image
FROM node:alpine

#Workdir sets up our working directory in the container
WORKDIR /usr/app

# Move dependant files into the container
COPY ./package.json ./ 
# COPY ./index.js ./index.js
# COPY ./package.json ./package.json


# INstall dependancies
RUN npm install

# Copy any source files over that may change
COPY ./ ./

# Setup default command; note each space is seperate
CMD ["npm", "start"]