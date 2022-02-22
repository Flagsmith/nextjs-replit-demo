import {useState} from 'react';

function MyApp({ Component, pageProps }) {
  const [update, shouldUpdate] = useState(0);
  
  return <Component {...pageProps} />
}

export default MyApp;