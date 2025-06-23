const url = require('../models/Url');
const { nanoid } = require('nanoid');

const BASE_URL = process.env.BASE_URL

exports.shortUrl = async (req, res) => {
    const { originalUrl } = req.body;
    const shortId = nanoid(7);

    const newUrl = await url.create({originalUrl, shortId});
    res.json({ shorUrl: `${BASE_URL}/${newUrl.shortId}` });
}

exports.redirectUrl = async (req, res) => {
    const { shortId } = req.params;
    const foundUrl = await url.findOne({ shortId})

    if(url){
        url.acessCount++;
        await url.save();
        return res.redirect(url.originalUrl)
    }

    res.status(404).json({ message: 'URL not found' });
}

exports.listUrls = async (req, res) => {
    const urls = await url.find();
    res.json(urls);
}

