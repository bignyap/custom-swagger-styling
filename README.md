# Styled Swagger UI

A custom-styled Swagger UI built with [Create React App](https://create-react-app.dev/), integrating [`swagger-ui-react`](https://www.npmjs.com/package/swagger-ui-react).

## 🚀 Features

- React-based UI
- Integrated Swagger UI for API docs
- Dockerized for easy deployment
- Production-ready build using `nginx`

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/)

---

## 🔧 Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Running Tests

```bash
npm test
```

---

## 📦 Production Build

```bash
npm run build
```

This generates an optimized build in the `build/` directory.

---

## 🐳 Docker

### Build Docker Image

```bash
make build-container
```

### Run with Docker Compose

```bash
make start-container
```

### Stop

```bash
make stop-container
```

The app will be served at [http://localhost](http://localhost) via nginx.

---

## ⚠️ Dependency Notes

If using `react@19.x`, ensure compatibility with libraries like `swagger-ui-react`. If you see peer dependency warnings, you may:

- Downgrade to `react@18`
- Use `npm install --legacy-peer-deps`

---

## 📁 Project Structure

```
├── public/             # Static assets
├── src/                # Source code
├── Dockerfile          # Production image setup
├── Makefile            # Build and container automation
├── docker-compose.yaml # Optional multi-container config
├── package.json        # Project config and scripts
```

---

## 📄 License

MIT
