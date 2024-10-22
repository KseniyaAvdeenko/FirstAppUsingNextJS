import localFont from "next/font/local";
import styles from "../styles/Home.module.sass";
import Head from "next/head";
import axios from "axios";
import Socials from "../components/Socials";
import Heading from "../components/Heading";


const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const getStaticProps = async () => {
    try {
        const response = await axios.get(process.env.NEXT_PUBLIC_API_HOST + `/socials`)
        return {
        props: {socials: response.data}
    }
    }catch {
        return {notFound: true}
    }

}


const Home = ({socials}) => {

    return (
        <main className={styles.wrapper}>
            <Head><title>Home</title></Head>
            <Heading tag={'h1'} heading={'Home page'}/>
            <Socials socials={socials}/>
        </main>
    );
}
export default Home;