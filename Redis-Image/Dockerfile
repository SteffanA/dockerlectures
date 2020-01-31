# Use an existing docker image as base
FROM alpine

# Download and install dependancy
RUN apk add --update redis
RUN apk add --update gcc

# Tell image what to do when it starts
CMD ["redis-server"]