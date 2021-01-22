const {Client} = require('pg')

client = new Client({
    host: 'ec2-3-220-222-72.compute-1.amazonaws.com',
    user: 'iqohataaqjickm',
    password: '7c82d1fff003d1fa15523a7e782a30ca5ec6c66f537a0ce1ce233271711a012b',
    database: 'das1f0dl2sis9d',
    ssl: { rejectUnauthorized: false }
});

client.connect()

module.exports = client;