const axios = require('axios')
const cacheService = require('./cache-service')
const config = require('../config/config')

async function getLatestVideoFromYoutube() {
  try {
    // Faz uma chamada para obter a lista de uploads do canal
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?key=${config.youtube.apiKey}&channelId=${config.youtube.channelId}&order=date&part=id,snippet&type=video`
    );

    // O primeiro item na resposta será o vídeo mais recente
    const latestVideo = response.data.items[0];
    const videoId = latestVideo.id.videoId;

    console.log(`Código do último vídeo: ${videoId}`);
    console.log(`Link completo: https://www.youtube.com/watch?v=${videoId}}`)

    return videoId;
  } catch (error) {
    console.error('Ocorreu um erro:', error.message);
  }
}

async function getLatestVideo() {

  try {
    const cachedVideo = await cacheService.loadVideoFromCache(config.youtube.channelId)
    if (cachedVideo) {
      return cachedVideo
    }

    const videoId = await getLatestVideoFromYoutube()
    await cacheService.saveVideoToCache(config.youtube.channelId, videoId)
    return videoId

  } catch (error) {
    console.error('Ocorreu um erro ao obter o video:', error.message);
    throw error
  }

}

module.exports = { getLatestVideo }