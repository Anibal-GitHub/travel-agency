exports.calculateTotal = (req, res) => {
    const { cityBasePrice, hotelPrice, numNights, numPeople } = req.body;
    const total = (cityBasePrice + hotelPrice) * numNights * numPeople;
    res.json({ total });
  };
  