import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";

rmSync("dist", { recursive: true, force: true });
mkdirSync("dist", { recursive: true });

if (existsSync("public")) {
  cpSync("public", "dist", { recursive: true });
}

if (existsSync("assets")) {
  mkdirSync("dist/assets", { recursive: true });
  cpSync("assets", "dist/assets", { recursive: true });
}
