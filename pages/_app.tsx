import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { Navbar } from '../components/organisms';
import { theme } from '../styles/theme';
import firebase from 'firebase';

import { useEffect } from 'react';
import { firebaseConfig } from '../firebase';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    firebase.initializeApp(firebaseConfig);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
