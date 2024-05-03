import type { NextApiRequest, NextApiResponse } from "next";
import pool from "./db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const [rows] = await pool.query("SELECT * FROM your_table");
      res.status(200).json(rows);
    } catch (error) {
      console.error("Error executing query:", error);
      res.status(500).json({ error: "An error occurred" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
