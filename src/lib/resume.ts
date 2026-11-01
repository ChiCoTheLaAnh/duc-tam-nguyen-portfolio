import { existsSync } from "node:fs";
import path from "node:path";
export function hasResume(root = process.cwd()) {
  return existsSync(path.join(root, "public", "resume.pdf"));
}
