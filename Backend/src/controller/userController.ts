import { Request, Response } from "express";

export default function userHome(req: Request, res: Response) {
  try {
    res.json({ message: "User Home is here" })
  } catch (error) {
    console.error(error, "Error caught in userHome controller");
    res.status(500).json({ error: "Internal Server Error" })
  }
}
