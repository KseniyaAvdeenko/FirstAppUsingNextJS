import styles from '../../styles/Home.module.sass';
import Head from "next/head";
import axios from "axios";
import Link from "next/link";
import Heading from "../../components/Heading";
import {FC} from "react";
import {IContact} from "../../components/IComponents";


export const getStaticProps = async () =>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')

    if(!response.data){
        return {notFound: true}
    }

    return {
        props: {contacts: response.data}
    }
}

const Contacts:FC<{contacts: IContact[]}> = ({contacts}) => {


    return (
        <main className={styles.wrapper}>
            <Head><title>Contacts</title></Head>
            <Heading heading={'Contacts'}/>
            <div className={styles.contacts}>
                {contacts && contacts.map(({id, name, email})=>(
                    <Link href={'/contacts/' + id} className={styles.contacts__item} key={id}>
                        <strong>{name}</strong> ({email})
                    </Link>
                ))}
            </div>
        </main>
    );
};

export default Contacts;

