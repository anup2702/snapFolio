import express from 'express'
import axios from 'axios'

const router = express.Router();

router.get("/login", (req, res) => {
  const redirect_uri = "http://localhost:5000/auth/github/callback";
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=${redirect_uri}&scope=repo`
  );
});

router.get("/callback", async (req, res) => {
  const code = req.query.code;

  const response = await axios.post(
    "https://github.com/login/oauth/access_token",
    {
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code: code,
    },
    {
      headers: { Accept: "application/json" },
    }
  );

  const access_token = response.data.access_token;
  res.redirect(`http://localhost:5173/builder?token=${access_token}`);
});

export default router;
