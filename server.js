const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// Palvellaan public-kansiosta staattiset tiedostot
app.use(express.static(path.join(__dirname, "public")));

let totalClicks = 0;
let lastMaskedUsernames = [];

app.post("/track", (req, res) => {
  const { maskedUsername } = req.body || {};

  totalClicks += 1;

  if (maskedUsername) {
    lastMaskedUsernames.unshift(maskedUsername);
    lastMaskedUsernames = lastMaskedUsernames.slice(0, 10);
  }

  res.json({
    totalClicks,
    lastMaskedUsernames,
  });
});

// Juuri-osoite palauttaa index.html:n
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Tracking server running on port ${port}`);
});

