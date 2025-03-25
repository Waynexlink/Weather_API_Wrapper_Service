const axios = require("axios");
const { getWeatherCache, setWeatherCache } = require("./cacheController");
exports.getWeatherdata = async (req, res) => {
  const city = req.params.city;
  const cacheData = await getWeatherCache(city);
  if (cacheData) {
    return res.json({ source: "Cache", data: cacheData });
  }
  try {
    const url = `${process.env.WEATHER_API_URL}/${city}?key=${process.env.WEATHER_API_KEY}`;

    const response = await axios.get(url);

    await setWeatherCache(city, response.data, 5000);
    return res.json({ source: "API", data: response.data });
  } catch (error) {
    res.status(500).json({
      error: "failed to fetch weather data ",
    });
  }
};
