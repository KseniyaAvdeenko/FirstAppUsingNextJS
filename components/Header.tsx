import styles from './Components.module.sass';
import Image from "next/image";
import Logo from '../public/logo.svg'
import Navbar from "./Navbar";
import {FC} from "react";


const Header: FC = () => {
    return (
        <header className={styles.header}>
            <Image src={Logo} height={30} width={82} alt={'AKA DEV'}/>
            <Navbar/>
        </header>
    );
};

export default Header;
