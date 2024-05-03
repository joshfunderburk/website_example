import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import mysql from "mysql2/promise";

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("file") as File | null;
  const fileName = formData.get("fileName") as string | null;

  if (!file || !fileName) {
    return NextResponse.json(
      { error: "File or file name missing" },
      { status: 400 }
    );
  }

  const desktopPath = path.join(process.env.HOME || "", "Desktop");
  const filePath = path.join(desktopPath, "files", file.name);

  try {
    await fs.mkdir(path.join(desktopPath, "files"), { recursive: true });
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    await fs.writeFile(filePath, buffer);

    const connection = await mysql.createConnection({
      host: "127.0.0.1",
      user: "root",
      password: "",
      database: "website_example",
    });

    const [result] = await connection.execute(
      "INSERT INTO files (filename, path, original_filename, created_at) VALUES (?, ?, ?, ?)",
      [fileName, filePath, file.name, new Date()]
    );

    await connection.end();

    return NextResponse.json({ message: "File uploaded successfully" });
  } catch (error) {
    console.error("Error uploading file:", error);
    return NextResponse.json({ error: "File upload failed" }, { status: 500 });
  }
}
