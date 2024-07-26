const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '../data/cities.json');

exports.getCities = (req, res) => {
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send(err);
    }
    const cities = JSON.parse(data).cities;
    res.json(cities);
  });
};

exports.getCityById = (req, res) => {
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send(err);
    }
    const cities = JSON.parse(data).cities;
    const city = cities.find(c => c.id === parseInt(req.params.id));
    if (city) {
      res.json(city);
    } else {
      res.status(404).send('City not found');
    }
  });
};
