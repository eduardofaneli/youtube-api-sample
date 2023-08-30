const express = require('express');
const youtubeService = require('./services/youtube-service');

var routes = express.Router();

routes.get('/', async (req, res) => {
    const latestVideo = await youtubeService.getLatestVideo()
    return res.json({ videoId: latestVideo });
});

module.exports = routes;