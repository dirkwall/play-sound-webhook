const express = require("express");
const Promise = require("bluebird");
const player = Promise.promisifyAll(require("play-sound")());
const app = express();
const port = 9090;

app.post("/", async (req, res) => {
  const r = await player.playAsync("sample.mp3");
  res.send("OK");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
