// 1. Importas las funciones que necesitas desde la librería que instalaste con npm
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// 2. Las credenciales únicas de tu aplicación (las tuyas de la imagen)
const firebaseConfig = {
  apiKey: "AIzaSyDMtwhJvSLmdfv0mUT5VkzS4aqY81A9_80",
  authDomain: "appfinances-e3f63.firebaseapp.com",
  projectId: "appfinances-e3f63",
  storageBucket: "appfinances-e3f63.firebasestorage.app",
  messagingSenderId: "801338122428",
  appId: "1:801338122428:web:aa469f1c718c4cf71b30b9",
  measurementId: "G-G5LGLZGG35"
};

// 3. Inicializas Firebase pasándole tu configuración
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 4. (Opcional pero recomendado) Exportas la app para usarla en tus otros archivos de JS
export { app };