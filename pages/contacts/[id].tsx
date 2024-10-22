import styles from '../../styles/Home.module.sass';
import Head from "next/head";
import axios from "axios";
import ContactInfo from "../../components/ContactInfo";
import {IContact} from "../../components/IComponents";
import {FC} from "react";
import {GetServerSideProps} from "next";

export const getServerSideProps = async (context) => {
    const {id} = context.params
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/' + id)

    if (!response.data) {
        return {notFound: true}
    }

    return {
        props: {contact: response.data}
    }
}

const Contact: FC<{ contact: IContact }> = ({contact}) => {
    return (
        <main className={styles.wrapper}>
            <Head><title>Contact</title></Head>
            <ContactInfo contact={contact}/>
        </main>
    );
};

export default Contact;
