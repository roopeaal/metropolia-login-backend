const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Yhteinen data muistissa (nollautuu jos palvelin boottaa uudelleen)
let totalClicks = 0;
let lastMaskedUsernames = []; // uusin ensin

app.post("/track", (req, res) => {
  const maskedUsername = req.body && req.body.maskedUsername;

  totalClicks += 1;

  if (maskedUsername && typeof maskedUsername === "string") {
    lastMaskedUsernames.unshift(maskedUsername);
    lastMaskedUsernames = lastMaskedUsernames.slice(0, 10);
  }

  res.json({
    totalClicks,
    lastMaskedUsernames
  });
});

// Pieni testireitti juureen
app.get("/", (req, res) => {
  res.send("Metropolia login tracker backend toimii 👍");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Tracking server running on port ${PORT}`);
});

