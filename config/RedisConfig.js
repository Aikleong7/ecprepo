// const redis = require('redis');

// // Retrieve Redis connection details from environment variables
// const redisHost = process.env.REDIS_HOST;
// const redisPort = process.env.REDIS_PORT;
// const redisPassword = process.env.REDIS_PASSWORD;

// // Create Redis client
// const client = redis.createClient({ redisHost, redisPort });

// // Handle Redis connection errors
// client.on('error', (error) => {
//     console.error('Error connecting to Redis:', error);
// });

// // Export the Redis client
// module.exports = client;

const Redis = require('ioredis');

// Retrieve Redis connection details from environment variables
const redisHost = process.env.REDIS_HOST;
const redisPort = process.env.REDIS_PORT;
const redisPassword = process.env.REDIS_PASSWORD;

// Create Redis client
const client = new Redis({
  host: redisHost,
  port: redisPort,
  tls: {}, // Add this empty tls field.
});

// Handle Redis connection errors
client.on('error', (error) => {
    console.error('Error connecting to Redis:', error);
});

// Export the Redis client
module.exports = client;