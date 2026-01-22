// pages/_app.js

import '../styles/globals.css'; // Global CSS for site-wide styling

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;