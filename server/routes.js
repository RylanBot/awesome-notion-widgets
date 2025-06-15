import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import quotes from "quotesy";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const router = express.Router();

// 首页
router.get("/", (_, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

// 组件
router.get("/poem", (_, res) => {
  res.sendFile(path.join(__dirname, "../views/widgets/chinese-poem.html"));
});

router.get("/quote", (_, res) => {
  res.sendFile(path.join(__dirname, "../views/widgets/english-quote.html"));
});

router.get("/music", (_, res) => {
  res.sendFile(path.join(__dirname, "../views/widgets/music-player.html"));
});

// API
router.get("/api/quote", (_, res) => {
  const quote = quotes.random();
  res.json({
    quote: quote.text,
    author: quote.author
  });
});

export default router;
