import cors from "cors";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import connectLivereload from "connect-livereload";
import livereload from "livereload";

import routes from "./routes.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = 7800;
const app = express();

const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "../views"));
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

app.use(connectLivereload());

app.use("/", routes);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "../assets")));

app.listen(PORT, () => {
  console.log(`\x1b[35m🎃 Server is running at \x1b[1m\x1b[36mhttp://localhost:${PORT}\x1b[0m`);
});

export default app;
