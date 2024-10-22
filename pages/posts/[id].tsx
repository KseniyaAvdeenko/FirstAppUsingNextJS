import styles from "../../styles/Home.module.sass";
import Head from "next/head";
import axios from "axios";
import PostInfo from "../../components/PostInfo";
import {FC} from "react";
import {IPost} from "../../components/IComponents";


export const getStaticPaths = async () =>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')

    const paths = response.data.map(({id})=>({
        params: {id: id.toString()}
    }))

    return {
        paths,
        fallback: false
    }
}


export const getStaticProps = async (context) => {
    const {id} = context.params
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id )

    if(!response.data) return {notFound: true}

    return {
        props: {post: response.data}
    }
}

const Post:FC<{post: IPost}> = ({post}) => {

    return (
        <div key={styles.posts}>
            <Head><title>Post</title></Head>
            <PostInfo post={post}/>
        </div>
    );
};

export default Post;
