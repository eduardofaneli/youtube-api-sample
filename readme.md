## Youtube API
### 1. Get Youtube API Key
- Go to [Google API Console](https://console.developers.google.com/apis/dashboard)
- Create a new project
- Click on `Enable APIs and Services`
- Search for `Youtube Data API v3` and enable it
- Click on `Credentials` on the left menu
- Click on `Create Credentials` and select `API Key`
- Copy the API Key and paste it in `.env` file
### 2. Get Youtube Channel ID
- Go to [Youtube](https://www.youtube.com/)
- Click on your profile picture and select `Settings`
- Click on `Advanced Settings`
- Copy the `Channel ID` and paste it in `.env` file

### 3. Run the api
- Copy `.env.example` to `.env` and fill the variables
- Run `npm install` to install the dependencies
- Run `npm start` to start the script

### 4. Run the api with docker
- Run 
    ```sh
        docker build /
        -t youtube-api /
        --build-arg NODE_ENV=production /
        --build-arg CACHE_TTL=3000 /
        --build-arg YOUTUBE_API_KEY=YOUR_API_KEY /
        --build-arg YOUTUBE_CHANNEL_ID=YOUR_CHANNEL_ID /
        .
    ```
    to build the image
- Run `docker run -p 3000:3000 youtube-api` to start the api

### 5. Run the api with docker-compose
- Run `docker compose up --build -d` to start the api
- Run `docker compose down` to stop the api


