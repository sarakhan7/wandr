# Wandr Frontend 🎨

This is the React frontend for Wandr - your intelligent travel companion. Built with modern web technologies and designed for an exceptional user experience.

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
```bash
npm install
```

### Environment Setup
Create a `.env` file in the client directory with your API keys:

```env
# Firebase Configuration
REACT_APP_apiKey=your_firebase_api_key
REACT_APP_authDomain=wandr.firebaseapp.com
REACT_APP_projectId=wandr
REACT_APP_storageBucket=wandr.appspot.com
REACT_APP_messagingSenderId=your_messaging_sender_id
REACT_APP_appId=your_app_id
REACT_APP_measurementId=your_measurement_id

# Google Maps API Key
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key

# Optional: Additional API Keys
REACT_APP_GEMINI_API_KEY=your_gemini_api_key
REACT_APP_GOOGLE_PLACES_API_KEY=your_google_places_api_key
REACT_APP_GOOGLE_PEOPLE_API_KEY=your_google_people_api_key
```

### Development
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view the app.

### Build for Production
```bash
npm run build
```

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Material-UI** - Beautiful, responsive design system
- **Firebase Auth** - User authentication and management
- **Google Maps API** - Interactive maps and location services
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── landing/        # Landing page components
│   └── onboarding/     # Onboarding flow components
├── pages/              # Main page components
├── services/           # API and external service integrations
├── models/             # TypeScript type definitions
├── context/            # React context providers
├── utils/              # Utility functions
├── constants/          # App constants and configurations
└── assets/             # Images, fonts, and static files
```

## 🎯 Key Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Type Safety** - Full TypeScript support for better development experience
- **Modern UI** - Clean, intuitive interface with Material-UI components
- **Real-time Updates** - Live data from Firebase and external APIs
- **Progressive Web App** - Installable and works offline

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm test` - Run test suite
- `npm run build` - Build for production
- `npm run eject` - Eject from Create React App (not recommended)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Mobile Support

The app is fully responsive and optimized for mobile devices with touch-friendly interactions and mobile-first design principles.

---

**Wandr Frontend** - Built with ❤️ using modern web technologies
