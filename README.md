# Team Hub SDK7 Library

[![npm version](https://badge.fury.io/js/@dcl-regenesislabs%2Fteamhub-lib.svg)](https://www.npmjs.com/package/@dcl-regenesislabs/teamhub-lib)

**Team Hub** is a powerful **Decentraland SDK7** library that provides a complete set of interactive tools for hosting events, managing participants, and creating engaging experiences in your Decentraland scenes.

Originally a standalone scene, Team Hub has been adapted as a reusable library to help content creators quickly add event management and interactive features to their projects.

---

## ✨ Features

Team Hub includes everything you need to create interactive events and manage audiences:

### 🎯 **Interactive Activities**
- **Polls & Voting** - Create live polls with real-time results
- **Zone-based Polls** - Physical voting zones where players walk to vote
- **Surveys** - Multi-question surveys with result analytics
- **Q&A Sessions** - Live question and answer management
- **Timer System** - Countdown timers for timed activities

### 🎪 **Event Management**
- **Stage & Podium** - Pre-built stage setup for presentations
- **Host Controls** - Comprehensive host toolbar and permissions
- **Moderation Panel** - Kick/ban functionality and player management
- **Activity Dashboard** - Centralized control panel for all activities
- **Host Indicators** - Visual indicators showing who has host permissions

### 🎨 **Customization**
- **Theme Customization** - Customize colors and branding
- **Auditorium Setup** - Ready-to-use auditorium layout
- **Asset Packs** - Pre-made 3D models and UI components
---

## 🚀 Quick Start

### 1. Create a new scene
Start by creating a new scene using the **Decentraland Creator Hub** (use the `Empty Scene` template).

### 2. Install Team Hub
Inside your scene folder, install the library:

```bash
npm install @dcl-regenesislabs/teamhub-lib@latest
```

### 3. Copy assets
Copy the required 3D models and images to your project:

```bash
node node_modules/@dcl-regenesislabs/teamhub-lib/scripts/copy-assets.cjs
```

This copies all assets (models, textures, etc.) to your `assets/` folder.

### 4. Add to your scene
In your `src/index.ts`, import and initialize Team Hub:

```ts
import { TeamHub } from '@dcl-regenesislabs/teamhub-lib'

export function main(): void {
  const hub = new TeamHub()
}
```

That's it! Your scene now includes all Team Hub features.

---

## 📦 What's Included

When you install Team Hub, you get:

### **Controllers**
- `GameController` - Main game logic coordinator
- `PlayerController` - Player state and permissions management
- `UIController` - UI state and visibility management

### **Interactive Components**
- Poll creation and voting systems
- Survey builder and response collector
- Q&A queue and moderation
- Zone-based voting areas
- Activity selection panels

### **UI Components**
- Main menu and navigation
- Host toolbar
- Moderation panel
- Results dashboards
- Timer displays
- Customization interface

### **Assets**
- Pre-built 3D models (stage, podium, voting zones)
- UI textures and icons
- Asset pack integrations

---

## 🎮 Usage Examples

### Basic Setup
```ts
import { TeamHub } from '@dcl-regenesislabs/teamhub-lib'

export function main(): void {
  const hub = new TeamHub()
  // Team Hub is now running with all features enabled
}
```

### Access Game Controller
```ts
import { TeamHub } from '@dcl-regenesislabs/teamhub-lib'

export function main(): void {
  const hub = new TeamHub()

  // Access the game controller for advanced customization
  const game = hub.gameController

  // Example: Access player controller
  const playerController = game.playerController

  // Example: Show/hide specific UI
  game.mainMenuUI.show()
}
```
---

## 🎨 Customization

Team Hub includes a built-in customization UI that allows hosts to:
- Change theme colors
- Customize branding
- Configure stage layout
- Adjust activity settings

Access customization through the host menu once Team Hub is running.

---

## 🛠️ Requirements

- **Node.js**: >= 18.0.0
- **npm**: >= 8.0.0
- **Decentraland SDK**: 7.x (latest)

---

For detailed API documentation, see the source code in `src/controllers/`.

---

## 🧩 Run it as a Scene

This library can also be executed directly as a **Decentraland scene** for testing or development purposes.

The entry point (`index.ts`) is **ignored in the npm package** (`.npmignore`) so it won’t be included when the library is installed in other projects — but it allows you to run this repo standalone as a scene.

To run it locally:

```bash
# Install dependencies
npm install

# Start the scene in the Decentraland Explorer (alpha)
npm run start -- --explorer-alpha
```

Your local `index.ts` should look like this:

```ts
import { TeamHub } from './start'

export function main(): void {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const hub = new TeamHub()
}
```

This will launch the TeamHub environment as a standalone scene for quick iteration and visual testing before publishing or packaging as a library.

---

## 🐛 Troubleshooting

### Assets not showing up
If 3D models or images aren't visible, manually run the asset copy script:

```bash
node node_modules/@dcl-regenesislabs/teamhub-lib/scripts/copy-assets.cjs
```

### UI not appearing
Make sure you've called `new TeamHub()` in your `main()` function.

### Build errors
Ensure you're using compatible versions:
- Decentraland SDK 7.x (latest)
- Node.js >= 18.0.0

Try updating the SDK:
```bash
npm install --save-dev @dcl/sdk@latest
```

---

## 📄 License

This project is open source. See the original [Team Hub Scene Repository](https://github.com/decentraland-scenes/teamhub-library) for license details.

---

## 🤝 Contributing

Contributions are welcome! This library is maintained as part of the Decentraland community ecosystem.

For bugs or feature requests, please open an issue on the [original repository](https://github.com/decentraland-scenes/teamhub-library).

---

## 💬 Support

- **Documentation**: [Decentraland SDK7 Docs](https://docs.decentraland.org)
- **Community**: [Decentraland Discord](https://dcl.gg/discord)
- **Original Scene**: [Team Hub Repository](https://github.com/decentraland-scenes/team-hub)

---

<p align="center">
  Built with ❤️ for the Decentraland community<br>
  <sub>Powered by <a href="https://dclregenesislabs.xyz/">DCL Regenesis Labs</a></sub>
</p>
