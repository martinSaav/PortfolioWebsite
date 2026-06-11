const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const root = process.cwd();
const browserDir = path.join(root, 'dist', 'portfolio-website', 'browser');

// Sin SSR, Angular genera index.html directamente
// Solo necesitamos copiarlo como 404.html para que el routing funcione en GitHub Pages
fs.copyFileSync(path.join(browserDir, 'index.html'), path.join(browserDir, '404.html'));
console.log('✅ 404.html listo');

const origin = execSync('git config --get remote.origin.url', { cwd: root }).toString().trim();
console.log('📡 Remote:', origin);

const run = (cmd) => execSync(cmd, { cwd: browserDir, stdio: 'inherit' });

try { fs.rmSync(path.join(browserDir, '.git'), { recursive: true, force: true }); } catch (e) {}

run('git init -b gh-pages');
run('git add -A');
run('git -c user.email="deploy@local" -c user.name="Deploy" commit -m "Deploy to GitHub Pages"');
run(`git push -f ${origin} HEAD:gh-pages`);

console.log('🚀 Deployed to GitHub Pages!');
