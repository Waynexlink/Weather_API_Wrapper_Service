const Redis = require("ioredis");

const redisClient = new Redis(
  process.env.REDIS_URL || "redis://localhost:6379"
);

const getWeatherCache = async (key) => {
  try {
    const data = await redisClient.get(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.log("error fetching data from redis", err.message);
  }
};
const setWeatherCache = async (key, value, expInSec) => {
  try {
    await redisClient.set(key, JSON.stringify(value), "EX", expInSec);
  } catch (error) {
    console.log("Redis SET error", error);
  }
};

module.exports = { getWeatherCache, setWeatherCache };
