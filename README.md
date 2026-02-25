# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## eslint config

1.create .eslintrc.json in the project and

```
{
   "extends":"react-app"
}
```

2. vite.config.js - import eslint()

```
import eslint from "vite-plugin-eslint";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
});
```

# Styled Components
```
npm i styled-components
```
# React router
```
npm i react-router-dom@6
```
# Reaact icons
```
npm i react-icons
```
# Supabase

```
npm install --save @supabase/supabase-js
```

# React Query or Tanstack

```
npm i @tanstack/react-query@4
```

# Devtools (like redux store)
```
npm i @tanstack/react-query-devtools
```
# Date functions
```
npm i date-fns
```
# React hot toast 
```
npm i react-hot-toast
```

# React Hooks form

npm i react-hook-form@7

https://supabase.com/docs/reference/javascript/installing

https://supabase.com/docs/reference/javascript/storage-from-upload
