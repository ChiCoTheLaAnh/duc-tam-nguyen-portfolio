import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, copyFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { hasResume } from "../src/lib/resume.ts";

test("resume detection retains the missing-file fallback and recognizes the provided asset", () => {
  const root = mkdtempSync(path.join(tmpdir(), "portfolio-resume-"));
  try {
    assert.equal(hasResume(root), false);
    mkdirSync(path.join(root, "public"));
    assert.equal(hasResume(root), false);
    copyFileSync(
      new URL("../public/resume.pdf", import.meta.url),
      path.join(root, "public", "resume.pdf"),
    );
    assert.equal(hasResume(root), true);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});
