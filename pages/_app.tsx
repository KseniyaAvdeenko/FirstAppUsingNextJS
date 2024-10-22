import '../styles/globals.css'
import Layout from "../components/Layout";
import {AppProps} from "next/app";
import Head from "next/head";

const App = ({Component, pageProps}: AppProps) => {
    return (
        <Layout>
            <Head>
                <link rel="website icon" href='./logo.svg'/>
            </Head>
            <Component {...pageProps} />
        </Layout>
    );
}
export default App