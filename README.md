# Wandr 🌍

Wandr is your intelligent travel companion that helps you discover the perfect places in any city based on your lifestyle preferences. By analyzing your preferences and using advanced AI, Wandr provides personalized recommendations for restaurants, attractions, activities, and hidden gems that match your unique style.

## ✨ Features

- **Smart Recommendations**: AI-powered suggestions based on your preferences
- **Interactive Maps**: Explore locations with Google Maps integration
- **Personalized Onboarding**: Tell us what you like and we'll find your perfect spots
- **Save Favorites**: Build your personal collection of favorite places
- **Social Features**: Share and discover recommendations with friends
- **Real-time Updates**: Get the latest information about places and events

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher) and npm
- Python 3.8+ and pip
- Firebase project
- Google Maps API key

### Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/sarakhan7/wandr.git
cd wandr
```

#### 2. Set Up the Frontend (React)
```bash
cd client
npm install
```

Create a `.env` file in the `client` directory:
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

Start the development server:
```bash
npm start
```

#### 3. Set Up the Backend (Flask)
```bash
cd ../server
pip install -r requirements.txt
```

Create a `.env` file in the `server` directory:
```env
REACT_APP_GEMINI_API_KEY=your_gemini_api_key
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
REACT_APP_PLACES_API_KEY=your_google_places_api_key
```

Start the Flask server:
```bash
python server.py
```

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Material-UI** for beautiful, responsive design
- **Firebase Auth** for user authentication
- **Google Maps API** for location services
- **React Router** for navigation

### Backend
- **Flask** (Python) for API endpoints
- **Google Places API** for location data
- **Gemini AI** for intelligent recommendations
- **Firebase** for database and authentication

### APIs & Services
- Google Maps Platform
- Google Places API
- Google Distance Matrix API
- Google Geocoding API
- Gemini AI API
- Firebase Authentication & Database

## 📱 How It Works

1. **Sign Up & Onboard**: Create an account and tell us about your preferences
2. **Discover**: Get personalized recommendations based on your style
3. **Explore**: Use interactive maps to find and explore places
4. **Save**: Build your personal collection of favorite locations
5. **Share**: Connect with friends and share amazing discoveries

## 🔧 Configuration

### Required API Keys

1. **Firebase Project**: Create a new project at [Firebase Console](https://console.firebase.google.com/)
2. **Google Maps API**: Get your API key from [Google Cloud Console](https://console.cloud.google.com/)
3. **Optional APIs**: Gemini AI, Google Places, Google People API

### Environment Variables

Make sure to set up all required environment variables in your `.env` files. Never commit these files to version control!

## 🚀 Deployment

### Frontend Deployment
```bash
cd client
npm run build
```

### Backend Deployment
The Flask server can be deployed to:
- Google App Engine
- Heroku
- Railway
- Any Python hosting platform

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with modern web technologies and AI-powered recommendations
- Special thanks to Google for providing the APIs that power our application
- Inspired by the desire to make travel and exploration more personalized and enjoyable

---

**Wandr** - Discover your world, one adventure at a time! 🌟
