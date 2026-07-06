import express from "express";
import path from "node:path";
import { errorHandler } from "./middleware/errorHandler";
import { notFoundHandler } from "./middleware/notFoundHandler";
import { v1Router } from "./routes/v1Router";
import { renderHomeScreenHtml } from "./views/homeScreenHtml";

export function createApp() {
  const app = express();

  app.use(express.json());
  app.use(
    "/search-discovery",
    express.static(path.join(process.cwd(), "Search state discovery concept")),
  );
  app.use(
    "/home-prototypes",
    express.static(path.join(process.cwd(), "Personalized Comparison Portal")),
  );

  app.get("/", (_req, res) => {
    res.status(200).type("text/html").send(renderHomeScreenHtml());
  });

  app.use("/api/v1", v1Router);

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}
