import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import mysql from "mysql2/promise";

export async function GET(request: Request) {
  // Logic that shows the user what files are available per the database
  // Logic to select file
  // Logic to retrieve file from file server using the file path from the database
  // file server connection would be made in lib/api-utiles and called here
  // Probably have some log that shows a file was donwloaded in the database
}
