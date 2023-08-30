const nodeCache = require('node-cache')
const config = require('../config/config')

const cache = new nodeCache({ stdTTL: config.cacheTTL })

async function loadVideoFromCache(channelId) {
  console.log(`Carregando vídeo do cache`)
  console.log(`Chave: ${channelId}`)
  const cachedVideo = cache.get(channelId)

  console.log(`Vídeo: ${cachedVideo}`)
  if (cachedVideo) {
    console.log(`Vídeo: ${cachedVideo} carregado do cache`)
    return cachedVideo
  }

  console.log(`Vídeo não encontrado no cache`)
  return null
}

async function saveVideoToCache(channelId, videoId) {
  console.log(`Salvando vídeo ${videoId} no cache`)
  console.log(`Chave: ${channelId}`)
  cache.set(channelId, videoId)
  console.log(`Vídeo salvo no cache`)
}


module.exports = { loadVideoFromCache, saveVideoToCache }