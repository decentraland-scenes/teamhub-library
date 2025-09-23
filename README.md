# Team Hub SDK7

Team Hub is a **Decentraland SDK7** library that provides controllers, components, and ready-to-use assets for your scenes.  
This repository was originally a standalone scene but was adapted as a **library** so you can integrate it into your own projects.

---

## 🚀 How to Use

### 1. Create a new scene
Start by creating a new scene using the **Decentraland Creator Hub**.  
(For example, use the `Empty Scene` template).

---

### 2. Install dependencies
Inside your scene folder, install Decentraland dependencies:

```bash
npm install
```

---

### 3. Install Team Hub SDK7
Install the packaged library.  

> ```bash
> npm install team-hub-sdk7@latest
> ```

---

### 4. Post-install: copy assets
To make sure **GLBs and images** are available in your scene, run the included script:

```bash
node node_modules/team-hub-sdk7/scripts/copy-assets.cjs
```

This will copy all required resources (models `.glb`, textures `.png`, etc.) into your `assets/` folder.

---

### 5. Import and use in your scene
Inside your main() function in `src/index.ts`, import and start TeamHub:

```ts
import { TeamHub } from 'team-hub-sdk7'

const hub = new TeamHub()
```

---
