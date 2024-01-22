const redis = require('redis');

// Retrieve Redis connection details from environment variables
const redisHost = process.env.REDIS_HOST;
const redisPort = process.env.REDIS_PORT;
const redisPassword = process.env.REDIS_PASSWORD;

// Create Redis client
const client = redis.createClient({ redisHost, redisPort });

// Handle Redis connection errors
client.on('error', (error) => {
    console.error('Error connecting to Redis:', error);
});

// Connection event
client.on('connect', () => {
    console.info('Connected to ElastiCache Redis');
});
  
// Set a key-value pair in the cache
client.set('my_key', 'my_value', (err, response) => {
    if (err) {
        console.error(`Set error: ${err}`);
    } else {
        console.log(`Set response: ${response}`);
    }
});