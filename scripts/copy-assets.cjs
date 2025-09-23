const fs = require('fs');
const path = require('path');

function cp(src, dst) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dst, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dst, entry.name);
    entry.isDirectory() ? cp(s, d) : fs.copyFileSync(s, d);
  }
}

const pkgDir = path.dirname(require.resolve('team-hub-sdk7/package.json'));
const cwd = process.cwd();

for (const folder of ['assets', 'images']) {
  const from = path.join(pkgDir, folder);
  const to = path.join(cwd, folder);
  cp(from, to);
  console.log(`[team-hub] Copy ${from} -> ${to}`);
}
