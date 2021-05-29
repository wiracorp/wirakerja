import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import store from '../app/store';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/app.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
        <Provider store={store}>
            <Head>
                <title>My page title</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            </Head>
            <Component {...pageProps} />
        </Provider>
  )
}

export default MyApp