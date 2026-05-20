# Austin Aguilar's Personal Portfolio

A simple responsive portfolio application built with React.

## 🔗 Deployed Application
[Visit Portfolio](https://www.austin-aguilar.com/)

## Built With
- **React** - Frontend framework
- **Vite** - Build tool
- **AWS Amplify** - Deployment

## Repository Layout
Each component directory has a `.jsx` file and `.css` file for contained styling.
```
portfolio/
├── src/
│   ├── App.css              
│   ├── App.jsx              
│   ├── index.css              
│   ├── main.jsx              
│   ├── Routes.jsx              
│   ├── assets/ # Image assets (profile photo, etc...)              
│   └── components/                
│        ├── about /
│        ├── contact /
│        ├── experience /
│        ├── home /
│        ├── landing /
│        ├── navbar /
│        ├── noPage /
│        └── projects /
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── vite.config.js
└── yarn.lock
```

## Prerequisites
- Node.js (v16+)
- npm or yarn

## Getting Started
1. **Clone the repository**
   ```bash
    git clone https://github.com/austin-aguilar/portfolio.git
   ```

2. **Navigate to project directory**
   ```bash
   cd <installation dir>/portfolio
   ```
3. **Install Dependencies**
    
    Using yarn:
    ```bash
    yarn
    ```
    Using npm
    ```bash
    npm install
    ```
4. **Start Application**
    
    Using yarn:
    ```bash
    yarn dev
    ```
   Using npm
   ```bash
   npm run dev
   ```

App will run at http://localhost:5173 
