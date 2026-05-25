const express = require("express");
const yt = require('@vreden/youtube_scraper');
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(
    `Ping at: ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`
  );
  res.sendStatus(200);
});

app.get("/info", async (req, res) => {
  const { url } = req.query;

  if (url) {
    try {
      const result = await yt.metadata(url)

      title = result.title;
      thumbnail = result.thumbnails.find(t => t.quality === "standard").url;

      res.send({ title: title, thumbnail: thumbnail });
    } catch (error) {
      res.status(500).send("Error fetching info");
    }

  } else {
    res.status(400).send("Invalid query");
  }
});

app.get("/mp3", async (req, res) => {
  const { url, quality = 128 } = req.query;

  if (url) {
    try {
      const result = await yt.ytmp3(url, quality)
      res.send(result.download);
    } catch (error) {
      res.status(500).send("Error fetching audio");
    }

  } else {
    res.status(400).send("Invalid query");
  }
});

app.get("/mp4", async (req, res) => {
  const { url, quality = 360 } = req.query;

  if (url) {
    try {
      const result = await yt.ytmp4(url, quality)
      res.send(result.download);
    } catch (error) {
      res.status(500).send("Error fetching video");
    }

  } else {
    res.status(400).send("Invalid query");
  }
});

app.listen(process.env.PORT || 3500, () => {
  console.log("Server on");
});
