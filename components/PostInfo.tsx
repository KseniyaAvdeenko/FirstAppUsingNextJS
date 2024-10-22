import styles from './Components.module.sass'
import Heading from "./Heading";
import {FC} from "react";
import {IPost} from "./IComponents";



const PostInfo:FC<{post: IPost}> = ({post}) => {
    const {title, body} = post || {}
    if (!post) return (<div>Empty post</div>)
    return (
        <div className={styles.contactWrapper}>
            <Heading tag={'h1'} heading={title}/>
            <div className={styles.contactWrapper__item}>{body}</div>
        </div>
    );
};

export default PostInfo;
