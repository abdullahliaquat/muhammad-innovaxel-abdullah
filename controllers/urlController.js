const Url = require('../models/Url');
const generateShortCode = require('../utils/shortCode');

exports.createShortUrl = async (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: 'URL is required' });

  const shortCode = generateShortCode();

  const newUrl = new Url({ url, shortCode });
  await newUrl.save();
  res.status(201).json(newUrl);
};

exports.getOriginalUrl = async (req, res) => {
  const { shortCode } = req.params;
  const record = await Url.findOne({ shortCode });
  if (!record) return res.status(404).json({ error: 'URL not found' });

  record.accessCount += 1;
  await record.save();
  res.json(record);
};

exports.updateShortUrl = async (req, res) => {
  const { shortCode } = req.params;
  const { url } = req.body;

  const updated = await Url.findOneAndUpdate(
    { shortCode },
    { url, updatedAt: new Date() },
    { new: true }
  );

  if (!updated) return res.status(404).json({ error: 'URL not found' });
  res.json(updated);
};

exports.deleteShortUrl = async (req, res) => {
  const { shortCode } = req.params;
  const deleted = await Url.findOneAndDelete({ shortCode });
  if (!deleted) return res.status(404).json({ error: 'URL not found' });

  res.status(204).send();
};

exports.getUrlStats = async (req, res) => {
  const { shortCode } = req.params;
  const record = await Url.findOne({ shortCode });
  if (!record) return res.status(404).json({ error: 'URL not found' });

  res.json(record);
};
