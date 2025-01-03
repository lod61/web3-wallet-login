module.exports = {
  // 对 TypeScript 和 JavaScript 文件运行 ESLint
  '**/*.{js,jsx,ts,tsx}': ['eslint --fix'],
  // 对所有支持的文件运行 Prettier（如果你之后想添加）
  // '**/*.{js,jsx,ts,tsx,json,css,scss,md}': ['prettier --write'],
} 