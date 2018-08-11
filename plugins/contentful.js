require("dotenv").config();
const createClient = require("contentful").createClient;
const fs = require("fs");
const { resolve } = require("path");
const contentful = createClient({
  space: process.env.VP_SPACE,
  accessToken: process.env.VP_TOKEN
});

(async () => {
  const photos = await contentful.getAssets();
  fs.writeFileSync(
    resolve(__dirname, "../assets/contentful.json"),
    JSON.stringify(photos)
  );
})();
