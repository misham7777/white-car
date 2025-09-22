#!/usr/bin/env node

// blocks crypto-related words in code & content
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

// More precise patterns for crypto terms
const banned = [
  { pattern: /\bcrypto\b/i, name: 'crypto' },
  { pattern: /\bcryptocurrency\b/i, name: 'cryptocurrency' },
  { pattern: /\bbitcoin\b/i, name: 'bitcoin' },
  { pattern: /\bbtc\b/i, name: 'btc' },
  { pattern: /\beth\b/i, name: 'eth' },
  { pattern: /\bethereum\b/i, name: 'ethereum' },
  { pattern: /\busdc\b/i, name: 'usdc' },
  { pattern: /\busdt\b/i, name: 'usdt' },
  { pattern: /\bbnb\b/i, name: 'bnb' },
  { pattern: /\bsol\b/i, name: 'sol' },
  { pattern: /\bxrp\b/i, name: 'xrp' },
  { pattern: /\btrx\b/i, name: 'trx' },
  { pattern: /\bada\b/i, name: 'ada' },
  { pattern: /\bmatic\b/i, name: 'matic' },
  { pattern: /\bstablecoin\b/i, name: 'stablecoin' },
  { pattern: /\bwallet\b/i, name: 'wallet' },
  { pattern: /\bblockchain\b/i, name: 'blockchain' },
  { pattern: /\bbinance\b/i, name: 'binance' }
];

const exts = ['.js', '.jsx', '.ts', '.tsx', '.mdx', '.md', '.html', '.css', '.scss', '.json', '.yml', '.yaml'];
const ignore = [
  'node_modules', '.next', 'out', 'dist', '.git', 'package-lock.json', 'pnpm-lock.yaml', 'yarn.lock',
  'public', 'scripts'
];

function getAllFiles(dir, fileList = []) {
  const files = readdirSync(dir);
  
  files.forEach(file => {
    const filePath = join(dir, file);
    const stat = statSync(filePath);
    
    if (stat.isDirectory()) {
      if (!ignore.includes(file)) {
        getAllFiles(filePath, fileList);
      }
    } else {
      const ext = extname(file);
      if (exts.includes(ext) && !file.includes('package-lock') && !file.includes('yarn.lock') && !file.includes('pnpm-lock')) {
        fileList.push(filePath);
      }
    }
  });
  
  return fileList;
}

const files = getAllFiles('.');

let hit = false;
for (const file of files) {
  try {
    const content = readFileSync(file, 'utf8');
    const lines = content.split('\n');
    
    lines.forEach((line, index) => {
      banned.forEach(term => {
        if (term.pattern.test(line)) {
          console.error(`${file}:${index + 1}: ${line.trim()} (found: ${term.name})`);
          hit = true;
        }
      });
    });
  } catch (error) {
    // Skip files that can't be read
  }
}

if (hit) {
  console.error('\n❌ Banned terms found. Remove crypto-related words before deploying.');
  process.exit(1);
} else {
  console.log('✅ No banned terms detected.');
}
