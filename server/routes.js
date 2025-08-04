import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import quotes from "quotesy";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const router = express.Router();

/* ========== 页面 ========== */

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

/* ========== API ========== */

// 随机引言
router.get("/api/quote", (_, res) => {
  const quote = quotes.random();
  res.json({
    quote: quote.text,
    author: quote.author
  });
});

// Bing 每日壁纸
router.get("/api/bing-image", async (_, res) => {
  const bingResponse = await fetch("https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN");
  const bingData = await bingResponse.json();
  const bingImageUrl = bingData.images[0].url;
  res.json({
    url: `https://www.bing.com/${bingImageUrl}`
  });
});

export default router;
