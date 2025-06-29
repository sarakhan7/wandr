// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey || "your_api_key_here",
  authDomain: process.env.REACT_APP_authDomain || "wandr.firebaseapp.com",
  projectId: process.env.REACT_APP_projectId || "wandr",
  storageBucket: process.env.REACT_APP_storageBucket || "wandr.appspot.com",
  messagingSenderId: process.env.REACT_APP_messagingSenderId || "your_messaging_sender_id_here",
  appId: process.env.REACT_APP_appId || "your_app_id_here",
  measurementId: process.env.REACT_APP_measurementId || "your_measurement_id_here",
};

// Check if required Firebase config values are set
const requiredFields = ['apiKey', 'authDomain', 'projectId', 'storageBucket', 'messagingSenderId', 'appId'];
const missingFields = requiredFields.filter(field => !process.env[`REACT_APP_${field}`]);

if (missingFields.length > 0) {
  console.warn('Missing Firebase configuration. Please create a .env file with the following variables:');
  missingFields.forEach(field => {
    console.warn(`REACT_APP_${field}=your_${field}_here`);
  });
  console.warn('You can get these values from your Firebase project settings.');
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export { database, auth };
