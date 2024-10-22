import styles from './Components.module.sass';
import Link from "next/link";
import {useRouter} from "next/router";
import {FC} from "react";

const Navbar:FC = () => {
    const {pathname} = useRouter();
    const links = [
        {id: 1, path: '/', name: 'Home'},
        {id: 2, path: '/posts', name: 'Posts'},
        {id: 3, path: '/contacts', name: 'Contacts'},
    ]
    return (
        <nav className={styles.navbar}>
            {links.map(link => (
                <Link
                    key={link.id}
                    className={
                        link.path === pathname
                            ? [styles.navbar__item, styles.linkHover].join(' ')
                            : styles.navbar__item}
                    href={link.path}>
                    {link.name}
                </Link>))}
        </nav>
    );
};

export default Navbar;
