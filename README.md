# ProBUILD Website

This is the repository for the ProBUILD website - a Product & Design Realization Platform.

## Features

- Modern React application built with Vite
- Responsive design with TailwindCSS
- Smooth animations with Framer Motion
- Clean and modern icons from Lucide React
- Client-side routing with React Router

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/probuild.git
   cd probuild
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### Building for Production

```bash
npm run build
```

### Deploying to GitHub Pages

1. Update the `base` property in `vite.config.js` to match your repository name:
   ```javascript
   base: '/your-repo-name/'
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

## Project Structure

```
probuild/
├── src/
│   ├── App.jsx         # Main application component
│   ├── main.jsx        # Application entry point
│   └── index.css       # Global styles and Tailwind imports
├── public/
│   └── ProBUILD.png    # Logo image
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.