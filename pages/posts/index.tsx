import styles from "../../styles/Home.module.sass";
import Head from "next/head";
import axios from "axios";
import Link from "next/link";
import Heading from "../../components/Heading";
import {FC} from "react";
import {IPost} from "../../components/IComponents";


export const getStaticProps = async () =>{
    const response = await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts')

    if(!response.data) return {notFound: true}

    return {
        props: {posts: response.data}
    }
}

const Posts: FC<{posts: IPost[]}> = ({posts}) => {
    return (
        <main className={styles.wrapper}>
            <Head><title>Posts</title></Head>
            <Heading heading={'Posts'}/>
            <div className={styles.posts}>
                {posts && posts.map(({id, title})=>(
                    <Link href={'/posts/' + id} className={styles.posts__item} key={id}>
                        {title}
                    </Link>
                ))}
            </div>
        </main>
    );
};

export default Posts;

