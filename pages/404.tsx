import {useRouter} from "next/router";
import {FC, useEffect} from "react";
import styles from "../styles/Home.module.sass";
import Head from "next/head";
import Heading from "../components/Heading";



const Error: FC = () => {
    const router = useRouter();

    useEffect(()=>{
        setTimeout(()=>{router.push('/')}, 3000)
    }, [router])
    return (
        <main className={styles.wrapper}>
            <Head><title>404</title></Head>
            <Heading heading={'404'}/>
            <Heading tag={'h3'} heading={'oops! :( Something went wrong'}/>
        </main>
    );
};

export default Error;
