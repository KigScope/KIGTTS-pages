# KIGTTS Web

基于 `Vite + React + MUI` 的静态展示页，适合直接构建后部署到 GitHub Pages。

## 开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

构建产物输出到 `dist/`，`vite.config.js` 已配置 `base: './'`，静态资源会使用相对路径。

## GitHub Pages

如果仓库已经初始化并关联远端，可以执行：

```bash
npm run deploy
```

该命令会先构建，再把 `dist/` 发布到 `gh-pages` 分支。

仓库中也已包含 GitHub Actions 工作流：

- 推送到 `main` 后会自动构建并发布到 GitHub Pages
- 更适合长期维护，不依赖本地部署命令
