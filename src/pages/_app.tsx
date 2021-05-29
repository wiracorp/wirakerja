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
                <title>Wirakerja</title>

                <link rel="icon" type="image/png" href="/img/favicon-16x16.png"/>
                <link rel="icon" type="image/png" href="/img/favicon-32x32.png"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            </Head>
            <Component {...pageProps} />
        </Provider>
  )
}

export default MyApp