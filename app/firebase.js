import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAwfBeY9Ou8mIoQIGrJKMUD_UaTT4S5YuQ",
  authDomain: "project-fooding.firebaseapp.com",
  projectId: "project-fooding",
  storageBucket: "project-fooding.appspot.com",
  messagingSenderId: "111196203099",
  appId: "1:111196203099:web:c637394f2ff04764cab77e",
  measurementId: "G-BG9JZFQ588",
};

// Инициализация только если приложение ещё не инициализировано
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// Безопасная инициализация Analytics
let analytics;
const initAnalytics = async () => {
  if (typeof window !== "undefined") {
    if (await isSupported()) {
      analytics = getAnalytics(app);
    }
  }
};
initAnalytics();

export const auth = getAuth(app);
export { analytics };
