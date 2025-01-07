import express, { NextFunction } from "express";
import { Request, Response } from "express";
import route from "./route/userRoute";
import cors from "cors"
const PORT = process.env.PORT || 4002;
console.log(PORT, "Port is showing here");
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors<Request>())

app.use("/", route);

app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}/home`);
});
