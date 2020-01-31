const express = require('express')
const redis = require('redis')
const process = require('process')

const app = express()
const client = redis.createClient({
    // Node makes good faith attempt to connect. Docker sees and redirects
    // to the named service
    host: 'redis-server', //https://my-redis-server.com, etc traditionally
    port: 6379 // Redis default
})
client.set('visits', 0)

app.get('/', (req, res) => {
    process.exit(1)
    client.get('visits', (err, visits) => {
        res.send('Number of visits is ' + visits)
        client.set('visits', parseInt(visits)+1)
    })
})

app.listen(8081, () => {
    console.log('Listening on port 8081')
})