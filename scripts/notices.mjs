import { execFileSync } from "node:child_process";
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, relative } from "node:path";
const packages = execFileSync(
  "npm",
  ["ls", "--omit=dev", "--parseable", "--all"],
  { encoding: "utf8" },
)
  .trim()
  .split("\n")
  .slice(1)
  .sort();
const parts = [
  "Carita — Third-party software notices\n\nLicenses below belong to their respective packages. This inventory includes production dependencies and vendored Next.js components; not all are shipped to browsers. It does not license Carita's own text or illustrations.\n",
];
async function collect(directory, recursive = false) {
  for (const entry of (await readdir(directory, { withFileTypes: true })).sort(
    (a, b) => a.name.localeCompare(b.name),
  )) {
    const file = join(directory, entry.name);
    if (entry.isDirectory() && recursive) await collect(file, true);
    else if (
      entry.isFile() &&
      /^(licen[cs]e|copying|copyright|notice)(\.|$)/i.test(entry.name)
    ) {
      parts.push(
        `\n${"=".repeat(72)}\n${relative("node_modules", file)}\n${"=".repeat(72)}\n\n${await readFile(file, "utf8")}`,
      );
    }
  }
}
for (const directory of packages) await collect(directory);
await collect("node_modules/next/dist/compiled", true);
parts.push(
  "\nPrimer Octicons — GitHub mark\nhttps://github.com/primer/octicons\n\n" +
    (await readFile("third-party/octicons/LICENSE", "utf8")),
);
await writeFile("public/third-party-notices.txt", parts.join("\n"));
console.log(`Wrote third-party notices (${parts.length - 1} files).`);
