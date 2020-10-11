import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import morgan from "morgan";
import {
  getFruitById,
  getFruits,
  healthCheck,
  postFruit,
} from "./lib/handlers";
const app = express();

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const middleware = (req: Request, res: Response, next: NextFunction) => {
  console.log("middleware here. How R yo doin'?");
  next();
};
app.use(middleware);

app.get("/api", healthCheck);
app.get("/api/foods", getFruits);
app.get("/api/foods/:id([0-9]+)", getFruitById);
app.post("/api/foods", postFruit);
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});

// Make Request with
// - curl https://curl.haxx.se/
// - httpie https://httpie.org/
// - Postman https://www.postman.com/
// - https://insomnia.rest/
//
// Topics to explore
// - query params
// - middleware
// - async routes
// - error handler
// - app.locals & request.app.locals
// - sessions
// - cookies
// - dotenv for .env files and environment variables
// - helmet
