# Kyro Zhao · 个人网站部署指南

## 📁 需要创建的文件

项目中应包含以下文件：

```
Kyro619-star.github.io/
├── index.html          # 主页面
├── style.css           # 样式
├── script.js           # 微交互（可选）
├── DEPLOY.md           # 本说明文件
└── assets/
    ├── photo.jpg       # 你的个人照片 ← 放这里
    └── berklee.svg     # Berklee 图标
```

---

## 📸 照片放置位置

1. 将你的个人照片文件命名为 **`photo.jpg`**
2. 放入 **`assets`** 文件夹，完整路径为：`assets/photo.jpg`
3. 如果已有 `photo.JPG` 在根目录，可复制到 `assets/` 并重命名为 `photo.jpg`

---

## 🎓 Berklee 图标位置

- 文件路径：**`assets/berklee.svg`**
- 已包含一个简约的 “B” 字母图标
- 若需替换为 Berklee 官方 logo，只需用官方 SVG 覆盖此文件即可

---

## 🚀 推送到 GitHub Pages

### 方法一：在 Cursor 中操作

1. 打开 **Source Control** 面板（左侧栏图标或 `Cmd+Shift+G`）
2. 在 “Changes” 中勾选要提交的文件
3. 在顶部输入框填写提交信息，例如：`Update personal site for Kyro Zhao`
4. 点击 **✓ Commit** 按钮
5. 点击 **Sync Changes** 或 **Push** 推送到 GitHub

### 方法二：使用终端

```bash
cd /Users/brian/Documents/GitHub/Kyro619-star.github.io

git add .
git commit -m "Update personal site for Kyro Zhao"
git push origin main
```

---

## ✅ 上线后访问

推送成功后，等待 1–2 分钟，在浏览器打开：

**https://kyro619-star.github.io**

若此前未启用 GitHub Pages，请到仓库的 **Settings → Pages**，将 Source 设置为 `Deploy from a branch`，Branch 选 `main`。
