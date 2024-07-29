// src/pages/_app.js
import '../app/globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
config.autoAddCss = false; // Tell FontAwesome to skip adding the CSS automatically since it's already imported

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
