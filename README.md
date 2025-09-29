📘 README.md
# React + TypeScript + Vite

Ce projet est une base minimale pour apprendre à utiliser **React** avec **TypeScript** et **Vite** 🚀.  
Il inclut un support pour le **Hot Module Replacement (HMR)** et quelques règles **ESLint** pour t’aider à garder un code propre.

---

## 📦 Installation

Clone le dépôt et installe les dépendances :

```bash
git clone https://github.com/ton-user/ton-projet.git
cd ton-projet
npm install
```

### ▶️ Lancer le projet

Pour démarrer le serveur de développement :
```bash
npm run dev
```
Ensuite ouvre http://localhost:5173 dans ton navigateur.

#### 🛠️ Scripts utiles

npm run dev → démarre le serveur de dev avec HMR

npm run build → génère la version de production dans le dossier dist/

npm run preview → lance un serveur local pour tester la version buildée

npm run lint → exécute ESLint pour analyser ton code


#####⚡ Plugins officiels disponibles

Deux plugins React peuvent être utilisés avec Vite :

@vitejs/plugin-react
 → utilise Babel pour le Fast Refresh

@vitejs/plugin-react-swc
 → utilise SWC (plus rapide)


######🔍 ESLint et règles TypeScript

Si tu développes une application destinée à la production, il est recommandé d’activer des règles ESLint plus strictes.
Par exemple, dans eslint.config.js :
```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Configuration recommandée
      tseslint.configs.recommendedTypeChecked,
      // Option stricte
      tseslint.configs.strictTypeChecked,
      // Option stylistique
      tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

#######🎨 Plugins ESLint supplémentaires pour React

Tu peux aussi installer :

eslint-plugin-react-x

eslint-plugin-react-dom

Puis les activer dans eslint.config.js :
```js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      reactX.configs['recommended-typescript'], // règles React
      reactDom.configs.recommended,            // règles React DOM
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

########📂 Structure du projet
vite-project/
├── public/              # Fichiers statiques
├── src/                 # Code source
│   ├── App.tsx          # Composant principal
│   ├── main.tsx         # Point d'entrée
│   └── ...              # Autres composants
├── tsconfig.json        # Config TypeScript
├── vite.config.ts       # Config Vite
└── package.json

#########🚀 Objectifs d’apprentissage

Comprendre la structure d’un projet React + TypeScript + Vite

Savoir utiliser HMR pour développer plus rapidement

Configurer et appliquer des règles ESLint adaptées

Apprendre à écrire des composants React avec TypeScript
