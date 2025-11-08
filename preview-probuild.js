// Simple preview server to serve `dist/` at the /probuild path
// Usage: node preview-probuild.js [port]

import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, 'dist');
const mountPath = '/probuild';
const port = process.argv[2] ? Number(process.argv[2]) : 5000;

function sendFile(res, filePath, contentType) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  // ensure the URL starts with the mountPath
  if (!req.url.startsWith(mountPath)) {
    // redirect to mountPath
    if (req.url === '/' || req.url === '') {
      res.writeHead(302, { Location: mountPath + '/' });
      res.end();
      return;
    }
    res.writeHead(404);
    res.end('Not found (this preview server serves the site at ' + mountPath + ')');
    return;
  }

  // Map /probuild/ -> dist/
  const relUrl = req.url.substring(mountPath.length) || '/';
  let fsPath = path.join(distDir, relUrl);

  // If path is directory, serve index.html
  if (fs.existsSync(fsPath) && fs.statSync(fsPath).isDirectory()) {
    fsPath = path.join(fsPath, 'index.html');
  }

  // Prevent path traversal
  if (!fsPath.startsWith(distDir)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  // Determine content type
  const ext = path.extname(fsPath).toLowerCase();
  const map = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.json': 'application/json',
    '.woff2': 'font/woff2',
  };
  const contentType = map[ext] || 'application/octet-stream';

  if (fs.existsSync(fsPath)) {
    sendFile(res, fsPath, contentType);
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(port, () => {
  console.log(`Preview server running at http://localhost:${port}${mountPath}/`);
});
