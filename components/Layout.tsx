import styles from './Components.module.sass';
import Header from "./Header";
import Footer from "./Footer";
import {FC, ReactNode} from "react";


const Layout:FC<{children: ReactNode}> = ({children}) => {
    return (
        <div className={styles.layout}>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
};

export default Layout;
