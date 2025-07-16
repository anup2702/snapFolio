import express from 'express';
import cors from 'cors';
import path from 'path';
import 'dotenv/config';
import githubRoutes from './auth/github.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/auth/github", githubRoutes);
app.get('/api/ping', (req, res) => res.send("✅ API is working!"));

// ==== Serve Frontend in Production ====
const __dirname = path.resolve(); // Required for __dirname in ES module

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
  });
}

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
