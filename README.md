# 🔊 NoiseAware Chrome Extension

**NoiseAware** is a Chrome Extension that intelligently adjusts system behavior based on **environmental noise**, using machine learning models powered by **Edge Impulse**. It detects audio patterns in the environment and adapts browser or system settings to optimize user focus, comfort, or performance.

Built with **React** and integrated with **Edge Impulse**, it offers an intelligent and responsive user experience directly from your browser.

---

## 🌟 Key Features

* Real-time environmental noise detection
* Dynamic adjustments based on noise classification
* Integrates **Edge Impulse** ML models for audio inference
* React-based UI for interaction and configuration
* Runs locally in the browser – no server needed

---

## 🧑‍💻 How to Run the Extension Locally in Chrome

### ✅ Prerequisites

* [Google Chrome browser](https://www.google.com/chrome/)
* [Node.js & npm](https://nodejs.org/)
* [Edge Impulse CLI or pre-trained model files](https://docs.edgeimpulse.com/)
* Git (optional)

---

### 🔧 Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/noiseaware-extension.git
   cd noiseaware-extension
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Build the React app:**

   ```bash
   npm run build
   ```

   This compiles the React frontend and prepares the extension in the `build/` directory.

4. **Load the extension in Chrome:**

   * Go to `chrome://extensions/`
   * Enable **Developer mode**
   * Click **"Load unpacked"**
   * Select the `build/` directory

---

## 📁 Project Structure

```
noiseaware-extension/
├── public/
├── src/
│   ├── components/
│   ├── popup/
│   ├── ml/                     # Edge Impulse model files
│   │   ├── model.eim           # Pre-trained model
│   │   └── edge-impulse-sdk/   # SDK and inference runtime
├── build/                      # Compiled extension (after build)
├── manifest.json               # Chrome extension config
├── package.json
└── README.md
```

---

## 🤖 ML & Inference (Edge Impulse)

* The extension includes a pre-trained **Edge Impulse model** for noise classification.
* Inference runs locally in the browser using **WebAssembly (WASM)** and Edge Impulse's SDK.
* No audio data is sent to any server.

---

## 🛠️ Tech Stack

* **React**
* **Edge Impulse WebAssembly SDK**
* **Chrome Extensions API**
* **JavaScript / TypeScript**
* **Web Audio API**

---

## 📄 License

This project is licensed under the **MIT License**.

---

Let me know if you'd like to include:

* How to train your own Edge Impulse model
* Example outputs or screenshots
* Privacy or data-handling notes
