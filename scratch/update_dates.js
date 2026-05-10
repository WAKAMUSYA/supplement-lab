const fs = require('fs');
const path = require('path');

const filePath = 'src/data/articles.ts';
let content = fs.readFileSync(filePath, 'utf8');

let count = 0;
const startDate = new Date('2026-01-05');

content = content.replace(/publishDate: '2026-05-10'/g, () => {
  const date = new Date(startDate);
  date.setDate(startDate.getDate() + (count * 4)); // 4 days apart
  count++;
  return `publishDate: '${date.toISOString().split('T')[0]}'`;
});

fs.writeFileSync(filePath, content);
console.log(`Updated ${count} articles.`);
