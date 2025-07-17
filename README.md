# 🚀 SnapFolio – Quick Developer Portfolio Builder

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](#license)

SnapFolio is an open-source portfolio builder for developers. Instantly generate a responsive personal portfolio by just filling out your details—**no coding required**.

🎯 Live Demo: will be deployed shortly

---

## ✨ Features

- 🖼️ **Live Preview** — See your portfolio update in real-time.
- 📦 **Export as ZIP** — Get a ready-to-deploy HTML + CSS version.
- 🧠 **No Coding Needed** — Just fill in your profile and projects.
- 🔐 **GitHub Auth** — Push your portfolio directly to your GitHub.
- 📄 **Download as PDF** — Capture your portfolio as a clean printable PDF.

---

## 🛠️ Tech Stack

### Frontend

- ⚛️ React (Vite)
- 💨 Tailwind CSS
- 🖼️ dom-to-pdf (PDF Export)
- 🪝 React Hooks
- 🍞 react-toastify (Notifications)

### Backend

- 🔁 Express.js
- 🛂 GitHub OAuth2
- 🌐 CORS

---

## 🚀 Getting Started Locally

### 1️⃣ Clone the repo

```bash
git clone https://github.com/anup2702/snapFolio.git
cd snapFolio
```


### 2️⃣ Create .env file in the server/ folder
``` bash
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
CLIENT_URL=http://localhost:5173
```

### 3️⃣ Install Dependencies
Backend
``` bash
cd server
npm install
```
Frontend
```bash
cd ../client
npm install
```

### 4️⃣ Starting the App
# Run Backend
```bash
cd server
npm run dev
```
# In another terminal, start Frontend
```bash
cd client
npm run dev
```

### 🤝 Contributing
```bash
# Fork the repo and clone it locally
git checkout -b feature/YourFeature

# Make changes and commit
git commit -m "Add: YourFeature"

# Push to GitHub
git push origin feature/YourFeature
```

### 📄 License
This project is licensed under the MIT License.

### 👤 Author
Built with ❤️ by Anup Kumar

