const { default: axios } = require('axios');
var dotenv = require('dotenv');
const { exit } = require('process');
dotenv.config();

async function getWeatherData(req, res) {
  try {
    const myApi = process.env.NODE_API_KEY;
    const url = process.env.NODE_API_URL;
    const city = req.query.city;

    const customFetch = axios.create({
      baseURL: url,
    });

    const response = await customFetch.get(
      `/weather?q=${city}&appid=${myApi}&units=metric`
    );
    const data = await response.data;
    res.send(data);
  } catch (error) {
    console.error(error.message);
    if (error.response && error.response.status === 404) {
      res.status(404).send(error.response.data);
      console.log(error.response.data);
    } else {
      res.status(500).send('Internal server error');
    }
  }
}

module.exports = getWeatherData;
