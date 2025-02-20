# React Application with Redux and API Integration

## Objective
Develop a React application that replicates a provided Figma design and integrates with specified public APIs while implementing Redux for state management.

## Features
- Pixel-perfect implementation of the provided Figma design.
- Multi-page layout including:
  - Homepage
  - User Profile Page
  - Posts Listing Page
- API integration with:
  - Random User API for user profiles
  - JSONPlaceholder API for posts and comments
- Global state management using Redux Toolkit.
- Responsive design across various devices.

## Bonus Features *(Optional)*
- Search functionality to filter posts.
- Dark mode toggle.
- Form handling for adding new comments.

## Project Structure
```
src/
├── components/
├── pages/
├── redux/
├── services/
├── styles/
├── App.jsx
└── main.jsx
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
1. Clone the repository:
```bash
git clone <repository-url>
cd <repository-folder>
```
2. Install dependencies:
```bash
npm install
# or
yarn install
```

### Available Scripts
Run the following scripts to manage the application:

- **Development Server:**
```bash
npm run dev
```
Starts the app with Vite in development mode.

- **Production Build:**
```bash
npm run build
```
Generates a production build.

- **Development Build:**
```bash
npm run build:dev
```
Builds the app in development mode.

- **Linting:**
```bash
npm run lint
```
Checks for code quality and formatting issues.

- **Preview Production Build:**
```bash
npm run preview
```
Serves the production build for preview.

## API Endpoints Used
- Random User API: `https://randomuser.me/api/`
- JSONPlaceholder API:
  - Posts: `https://jsonplaceholder.typicode.com/posts`
  - Comments: `https://jsonplaceholder.typicode.com/comments`

## Deployment
Deploy the app to Vercel, Netlify, or GitHub Pages:
```bash
yarn build
yarn preview
```

## Figma Design
[View Figma Design](https://www.figma.com/design/DX2K5Oty2V1BtdolujXLZY/App-Saas-Landing-Page-(Community)?node-id=3-235)

## Submission
- Host code in a public GitHub repository.
- Deploy and share the live demo URL.
- Ensure the code is well-documented with comments for complex logic.

## License
This project is licensed under the MIT License.

