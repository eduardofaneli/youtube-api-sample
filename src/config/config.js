const enviroment = process.env.NODE_ENV || "local";

if (enviroment === "local") {
    console.log("Carregando variáveis de ambiente...");
    require('dotenv').config()
}

module.exports = {
    cacheTTL: parseInt(process.env.CACHE_TTL),
    youtube: {
        apiKey: process.env.YOUTUBE_API_KEY,
        channelId: process.env.YOUTUBE_CHANNEL_ID
    }
};